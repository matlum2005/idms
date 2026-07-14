package com.idms.dto.batch;

import java.time.LocalDate;
import java.util.List;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class BatchSearchResponse {

    private List<BatchResponse> content;
    private int page;
    private int size;
    private long totalElements;
    private int totalPages;
}

