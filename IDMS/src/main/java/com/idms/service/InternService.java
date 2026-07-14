package com.idms.service;

import com.idms.domain.Batch;
import com.idms.domain.IdCardType;
import com.idms.domain.Intern;
import com.idms.dto.intern.InternCreateRequest;
import com.idms.dto.intern.InternResponse;
import com.idms.dto.intern.InternSearchResponse;
import com.idms.exception.DuplicateEmailException;
import com.idms.exception.InvalidBatchException;
import com.idms.exception.ResourceNotFoundException;
import com.idms.mapper.InternMapper;
import com.idms.repository.BatchRepository;
import com.idms.repository.InternRepository;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class InternService {

    private final InternRepository internRepository;
    private final BatchRepository batchRepository;
    private final InternIdGenerator internIdGenerator;

    public InternService(InternRepository internRepository,
                          BatchRepository batchRepository,
                          InternIdGenerator internIdGenerator) {
        this.internRepository = internRepository;
        this.batchRepository = batchRepository;
        this.internIdGenerator = internIdGenerator;
    }

    @Transactional
    public InternResponse create(InternCreateRequest request) {

        if (internRepository.existsByEmail(request.getEmail())) {
            throw new DuplicateEmailException("Email already exists: " + request.getEmail());
        }

        Batch batch = batchRepository.findById(request.getBatchId())
                .orElseThrow(() -> new InvalidBatchException("Invalid batchId: " + request.getBatchId()));

        String internId = internIdGenerator.nextInternId(request.getIdCardType());
        Intern intern = InternMapper.toEntity(request, internId, batch);
        Intern saved = internRepository.save(intern);
        return InternMapper.toResponse(saved);
    }

    public InternResponse getByInternId(String internId) {
        Intern intern = internRepository.findByInternId(internId)
                .orElseThrow(() -> new ResourceNotFoundException("Intern not found: " + internId));
        return InternMapper.toResponse(intern);
    }

    public InternSearchResponse search(Long batchId, IdCardType idCardType, Pageable pageable) {
        Page<Intern> page;
        if (batchId == null && idCardType == null) {
            page = internRepository.findAll(pageable);
        } else if (batchId != null && idCardType != null) {
            page = internRepository.findByBatch_IdAndIdCardType(batchId, idCardType, pageable);
        } else if (batchId != null) {
            page = internRepository.findByBatch_Id(batchId, pageable);
        } else {
            // idCardType-only search can be added later
            page = internRepository.findAll(pageable);
        }

        return InternSearchResponse.builder()
                .content(page.getContent().stream().map(InternMapper::toResponse).toList())
                .page(page.getNumber())
                .size(page.getSize())
                .totalElements(page.getTotalElements())
                .totalPages(page.getTotalPages())
                .build();
    }
}

