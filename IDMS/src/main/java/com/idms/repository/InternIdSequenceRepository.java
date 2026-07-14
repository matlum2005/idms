package com.idms.repository;

import com.idms.domain.IdCardType;
import com.idms.domain.InternIdSequence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import jakarta.persistence.LockModeType;
import java.util.Optional;

public interface InternIdSequenceRepository extends JpaRepository<InternIdSequence, String> {

    @Query("select s from InternIdSequence s where s.idCardType = :idCardType")
    Optional<InternIdSequence> findByIdCardType(@Param("idCardType") IdCardType idCardType);

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("select s from InternIdSequence s where s.idCardType = :idCardType")
    Optional<InternIdSequence> findByIdCardTypeForUpdate(@Param("idCardType") IdCardType idCardType);
}

