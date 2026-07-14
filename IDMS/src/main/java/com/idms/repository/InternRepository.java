package com.idms.repository;

import com.idms.domain.IdCardType;
import com.idms.domain.Intern;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InternRepository extends JpaRepository<Intern, Long> {

    Optional<Intern> findByInternId(String internId);

    boolean existsByEmail(String email);

    Page<Intern> findByBatch_IdAndIdCardType(Long batchId, IdCardType idCardType, Pageable pageable);

    Page<Intern> findByBatch_Id(Long batchId, Pageable pageable);
}

