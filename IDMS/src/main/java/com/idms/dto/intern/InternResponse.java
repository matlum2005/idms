package com.idms.dto.intern;

import com.idms.domain.IdCardType;
import java.util.Objects;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class InternResponse {

    private Long id;
    private String internId;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private IdCardType idCardType;
    private Long batchId;
}

