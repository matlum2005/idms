package com.idms.controller;

import com.idms.domain.IdCardType;
import com.idms.dto.batch.BatchCreateRequest;
import com.idms.dto.batch.BatchResponse;
import com.idms.dto.batch.BatchSearchResponse;
import com.idms.service.BatchService;
import jakarta.validation.Valid;
import java.time.LocalDate;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/batches")
@RequiredArgsConstructor
public class BatchController {

    private final BatchService batchService;

    @PostMapping
    public BatchResponse create(@Valid @RequestBody BatchCreateRequest request) {
        return batchService.create(request);
    }

    @GetMapping("/{id}")
    public BatchResponse getById(@PathVariable Long id) {
        return batchService.getById(id);
    }

    @GetMapping("/search")
    public BatchSearchResponse search(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to,
            @ParameterObject Pageable pageable) {
        return batchService.search(from, to, pageable);
    }
}

