package com.idms.service;

import com.idms.domain.Batch;
import com.idms.dto.batch.BatchCreateRequest;
import com.idms.dto.batch.BatchResponse;
import com.idms.dto.batch.BatchSearchResponse;
import com.idms.exception.ResourceNotFoundException;
import com.idms.mapper.BatchMapper;
import com.idms.repository.BatchRepository;
import java.time.LocalDate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BatchService {

    private final BatchRepository batchRepository;

    public BatchService(BatchRepository batchRepository) {
        this.batchRepository = batchRepository;
    }

    public BatchResponse create(BatchCreateRequest request) {
        Batch saved = batchRepository.save(new Batch(request.getStartDate()));
        return BatchMapper.toResponse(saved);
    }

    public BatchResponse getById(Long id) {
        Batch batch = batchRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Batch not found: " + id));
        return BatchMapper.toResponse(batch);
    }

    public BatchSearchResponse search(LocalDate from, LocalDate to, Pageable pageable) {
        Page<Batch> page = batchRepository.findByStartDateBetween(from, to, pageable);
        return BatchSearchResponse.builder()
                .content(page.getContent().stream().map(BatchMapper::toResponse).toList())
                .page(page.getNumber())
                .size(page.getSize())
                .totalElements(page.getTotalElements())
                .totalPages(page.getTotalPages())
                .build();
    }
}

