package com.idms.dto.intern;

import com.idms.domain.IdCardType;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class InternCreateRequest {

    @NotBlank
    @Size(max = 100)
    private String firstName;

    @NotBlank
    @Size(max = 100)
    private String lastName;

    @NotBlank
    @Email
    @Size(max = 255)
    private String email;

    @Size(max = 30)
    @Pattern(regexp = "[+0-9 ()-]*", message = "phone contains invalid characters")
    private String phone;

    @NotNull
    private IdCardType idCardType;

    @NotNull
    private Long batchId;
}

