package com.idms.mapper;

import com.idms.domain.Batch;
import com.idms.dto.batch.BatchCreateRequest;
import com.idms.dto.batch.BatchResponse;
import java.util.Objects;

public final class BatchMapper {

    private BatchMapper() {}

    public static Batch toEntity(BatchCreateRequest request) {
        Objects.requireNonNull(request, "request");
        return new Batch(request.getStartDate());
    }

    public static BatchResponse toResponse(Batch batch) {
        if (batch == null) {
            return null;
        }
        return BatchResponse.builder()
                .id(batch.getId())
                .startDate(batch.getStartDate())
                .endDate(batch.getEndDate())
                .totalInterns(batch.getTotalInterns())
                .build();
    }
}

