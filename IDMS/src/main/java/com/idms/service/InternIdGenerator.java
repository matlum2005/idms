package com.idms.service;

import com.idms.domain.IdCardType;
import com.idms.domain.Intern;
import com.idms.domain.InternIdSequence;
import com.idms.repository.InternIdSequenceRepository;
import jakarta.transaction.Transactional;
import java.util.EnumMap;
import org.springframework.stereotype.Service;

@Service
public class InternIdGenerator {

    private final InternIdSequenceRepository sequenceRepository;

    public InternIdGenerator(InternIdSequenceRepository sequenceRepository) {
        this.sequenceRepository = sequenceRepository;
    }

    @Transactional
    public String nextInternId(IdCardType idCardType) {
        InternIdSequence sequence = sequenceRepository.findByIdCardTypeForUpdate(idCardType)
                .orElseGet(() -> new InternIdSequence(idCardType, 0L));

        String next = sequence.nextInternId();
        sequenceRepository.save(sequence);
        return next;
    }
}

