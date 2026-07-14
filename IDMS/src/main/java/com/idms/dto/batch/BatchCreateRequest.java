package com.idms.dto.batch;

import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BatchCreateRequest {

    @NotNull
    private LocalDate startDate;
}

