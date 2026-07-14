package com.idms.controller;

import com.idms.domain.IdCardType;
import com.idms.dto.intern.InternCreateRequest;
import com.idms.dto.intern.InternResponse;
import com.idms.dto.intern.InternSearchResponse;
import com.idms.service.InternService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/interns")
@RequiredArgsConstructor
public class InternController {

    private final InternService internService;

    @PostMapping
    public InternResponse create(@Valid @RequestBody InternCreateRequest request) {
        return internService.create(request);
    }

    @GetMapping("/{internId}")
    public InternResponse getByInternId(@PathVariable String internId) {
        return internService.getByInternId(internId);
    }

    @GetMapping("/search")
    public InternSearchResponse search(
            @RequestParam(required = false) Long batchId,
            @RequestParam(required = false) IdCardType idCardType,
            @ParameterObject Pageable pageable) {
        return internService.search(batchId, idCardType, pageable);
    }
}

