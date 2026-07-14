# TODO - IDMS Spring Boot App

## Progress
- [x] Create Maven project files (`pom.xml`, `README.md`)
- [x] Add application configuration for MySQL, JPA, Swagger, and Spring Security
- [x] Implement base app + config:
  - [x] `IDmsApplication`
  - [x] Swagger/OpenAPI config
  - [x] Basic admin HTTP authentication config
  - [x] JPA auditing config + `AuditableEntity`

## Completed Verification
- [x] `mvn test` build verification (no compilation errors; no tests present)

## Next Steps (Implementation)
1. [x] Add domain entities
   - [x] `Batch` entity (endDate = startDate + 6 months, totalInterns derived)
   - [x] `Intern` entity (internId immutable, relation to `Batch`)
   - [x] `IdCardType` enum
2. [x] Implement internId generation logic (FREE/PREMIUM sequential)
3. [x] Add repositories (BatchRepository, InternRepository) with search methods
4. [x] Add DTOs + validation/request/response models
5. [x] Add mappers (DTO <-> Entity)
6. [x] Implement services (CRUD + overview + search + pagination)
7. [x] Implement controllers (Batch + Intern + Search + Overview endpoints)
8. [x] Implement exception layer
   - [x] Custom exceptions: ResourceNotFoundException, DuplicateEmailException, InvalidBatchException
   - [x] `GlobalExceptionHandler`
9. [x] Swagger/OpenAPI: add tags/operation summaries and verify endpoints
10. [x] Add MySQL schema notes (ensure JPA constraints generate correct schema)
11. [x] Add tests + run `mvn test`

## Working Plan Progress (implementation)
- [x] Step A: Domain entities (Batch, Intern)
- [x] Step B: InternId generator
- [x] Step C: Repositories
- [x] Step D: DTOs + validation
- [x] Step E: Mappers
- [x] Step F: Services
- [x] Step G: Controllers
- [x] Step H: Exceptions + Global handler
- [x] Step I: Swagger annotations + verify
- [x] Step J: Tests


