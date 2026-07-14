package com.idms.dto.batch;

import java.time.LocalDate;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class BatchResponse {

    private Long id;
    private LocalDate startDate;
    private LocalDate endDate;
    private Integer totalInterns;
}

