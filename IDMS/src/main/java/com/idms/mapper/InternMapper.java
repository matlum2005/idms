package com.idms.mapper;

import com.idms.domain.Batch;
import com.idms.domain.Intern;
import com.idms.domain.IdCardType;
import com.idms.dto.intern.InternCreateRequest;
import com.idms.dto.intern.InternResponse;
import java.util.Objects;

public final class InternMapper {

    private InternMapper() {}

    public static Intern toEntity(InternCreateRequest request, String internId, Batch batch) {
        Objects.requireNonNull(request, "request");
        Objects.requireNonNull(internId, "internId");
        Objects.requireNonNull(batch, "batch");

        IdCardType idCardType = request.getIdCardType();

        Intern intern = new Intern(
                internId,
                request.getFirstName(),
                request.getLastName(),
                request.getEmail(),
                idCardType,
                request.getPhone()
        );
        intern.setBatch(batch);
        return intern;
    }

    public static InternResponse toResponse(Intern intern) {
        if (intern == null) {
            return null;
        }

        return InternResponse.builder()
                .id(intern.getId())
                .internId(intern.getInternId())
                .firstName(intern.getFirstName())
                .lastName(intern.getLastName())
                .email(intern.getEmail())
                .phone(intern.getPhone())
                .idCardType(intern.getIdCardType())
                .batchId(intern.getBatch() != null ? intern.getBatch().getId() : null)
                .build();
    }
}

