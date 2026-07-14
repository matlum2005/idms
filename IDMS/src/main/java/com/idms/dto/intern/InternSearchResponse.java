package com.idms.dto.intern;

import java.util.List;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class InternSearchResponse {

    private List<InternResponse> content;
    private int page;
    private int size;
    private long totalElements;
    private int totalPages;
}

