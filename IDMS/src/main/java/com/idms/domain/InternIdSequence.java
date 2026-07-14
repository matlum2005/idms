package com.idms.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Objects;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "intern_id_sequences")
@Getter
@Setter
@NoArgsConstructor
public class InternIdSequence {

    @Id
    @Enumerated(EnumType.STRING)
    @Column(name = "id_card_type", length = 20, nullable = false)
    private IdCardType idCardType;

    @Column(name = "current_value", nullable = false)
    private Long currentValue = 0L;

    public InternIdSequence(IdCardType idCardType, Long currentValue) {
        this.idCardType = idCardType;
        this.currentValue = currentValue;
    }

    public String nextInternId() {
        long next = currentValue + 1;
        currentValue = next;
        return idCardType.name() + "-" + next;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof InternIdSequence that)) return false;
        return idCardType == that.idCardType;
    }

    @Override
    public int hashCode() {
        return Objects.hash(idCardType);
    }
}

