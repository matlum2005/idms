package com.idms.repository;

import com.idms.domain.Batch;
import java.time.LocalDate;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BatchRepository extends JpaRepository<Batch, Long> {

    Optional<Batch> findById(Long id);

    boolean existsByStartDate(LocalDate startDate);

    Page<Batch> findByStartDateBetween(LocalDate from, LocalDate to, Pageable pageable);
}

