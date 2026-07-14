package com.idms.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import java.util.Objects;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(
        name = "interns",
        uniqueConstraints = {
                @UniqueConstraint(name = "uk_interns_intern_id", columnNames = {"intern_id"}),
                @UniqueConstraint(name = "uk_interns_email", columnNames = {"email"})
        }
)
@Getter
@Setter
@NoArgsConstructor
public class Intern extends AuditableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "intern_id", nullable = false, updatable = false, unique = true, length = 32)
    private String internId;

    @Column(name = "first_name", nullable = false, length = 100)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName;

    @Column(name = "email", nullable = false, length = 255, unique = true)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(name = "id_card_type", nullable = false, length = 20)
    private IdCardType idCardType;

    @Column(name = "phone", length = 30)
    private String phone;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "batch_id", nullable = false)
    private Batch batch;

    public Intern(String internId,
                  String firstName,
                  String lastName,
                  String email,
                  IdCardType idCardType,
                  String phone) {
        this.internId = internId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.idCardType = idCardType;
        this.phone = phone;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Intern intern)) return false;
        return Objects.equals(internId, intern.internId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(internId);
    }
}

