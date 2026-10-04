# LokNexus Integration Contract

## 1. Single Backend

There is exactly one backend:

```text
Spring Boot
```

React and Android both consume it.

---

# 2. Single Database

There is exactly one primary database:

```text
PostgreSQL
```

Only the Spring Boot backend directly accesses PostgreSQL.

React and Android never access PostgreSQL directly.

---

# 3. API Integration

React and Android communicate through:

```text
REST + JSON
```

They must follow:

```text
docs/api.md
```

---

# 4. Backend Ownership

Member 1 owns:

* Spring Boot
* database migrations
* authentication
* authorization
* core domain APIs
* challenge lifecycle
* project APIs
* impact APIs
* API contracts

---

# 5. Web Ownership

Member 2 owns:

* React
* UI
* routing
* forms
* dashboards
* web API integration

---

# 6. ML / Mobile / DevOps Ownership

Member 3 owns:

* ML
* matching implementation
* Android
* Docker
* CI/CD
* QA support

---

# 7. Shared Data Contracts

Do not invent different names for the same concept.

For example, always use:

```text
challengeId
projectId
universityId
userId
```

in JSON.

Do not use:

```text
challenge_id
challengeID
challenge
```

in API JSON unless explicitly defined by the contract.

Database naming remains snake_case.

API JSON uses camelCase.

---

# 8. API DTO Rule

Frontend/mobile must consume DTOs.

JPA entity structures must not become accidental API contracts.

---

# 9. Breaking Changes

Before changing an API:

1. Update docs/api.md.
2. Notify other developers.
3. Update affected client code.
4. Test backend.
5. Test web.
6. Test Android where applicable.

---

# 10. Integration Sequence

Features should integrate in this order:

```text
Backend API
    ↓
Backend tests
    ↓
React integration
    ↓
Android integration
    ↓
End-to-end testing
```

---

# 11. Demo Data

Demo data must never be mistaken for real data.

Use labels such as:


DEMO
SAMPLE


---

# 12. Final Integration Principle

The system is successful only when the complete workflow works:

Citizen
 ↓
Challenge
 ↓
Validation
 ↓
ML Classification
 ↓
Priority
 ↓
University Matching
 ↓
University Assignment
 ↓
Faculty
 ↓
Student Team
 ↓
Project
 ↓
Milestones
 ↓
Deliverables
 ↓
Community Validation
 ↓
Impact Measurement
 ↓
Completion
