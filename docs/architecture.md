# LokNexus Architecture Contract

## 1. Purpose

LokNexus is a civic-tech academic innovation platform that transforms real-world community challenges into structured academic projects with measurable social impact.

The system consists of:

* React web application
* Android mobile application
* Spring Boot REST API
* PostgreSQL database
* ML classification module
* University matching module

---

# 2. Architectural Style

LokNexus uses a **modular monolithic architecture**.

Microservices are NOT part of the current architecture.

The backend is a single Spring Boot application containing logically separated modules.

---

# 3. High-Level Architecture

```text
                    ┌─────────────────────┐
                    │     React Web       │
                    │     Application     │
                    └──────────┬──────────┘
                               │
                               │ REST/JSON
                               │
                    ┌──────────▼──────────┐
                    │                     │
                    │    Spring Boot      │
                    │      Backend        │
                    │                     │
                    │ ┌─────────────────┐ │
                    │ │ Auth            │ │
                    │ │ User            │ │
                    │ │ Challenge       │ │
                    │ │ University      │ │
                    │ │ Matching        │ │
                    │ │ Project         │ │
                    │ │ Team            │ │
                    │ │ Proposal        │ │
                    │ │ Milestone       │ │
                    │ │ Impact          │ │
                    │ │ Notification    │ │
                    │ │ Messaging       │ │
                    │ │ ML              │ │
                    │ │ File            │ │
                    │ │ Audit           │ │
                    │ └─────────────────┘ │
                    │                     │
                    └──────────┬──────────┘
                               │
                               │ JPA/JDBC
                               │
                    ┌──────────▼──────────┐
                    │     PostgreSQL      │
                    └─────────────────────┘


                    ┌─────────────────────┐
                    │   Android Mobile    │
                    │     Application     │
                    └──────────┬──────────┘
                               │
                               │ REST/JSON
                               │
                               └──────► Spring Boot
```

---

# 4. Backend Architecture

The backend follows:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

Controllers must not contain business logic.

Services contain business rules.

Repositories handle persistence.

Entities represent database persistence models.

DTOs represent API request/response contracts.

Mappers convert between entities and DTOs.

---

# 5. Backend Modules

The backend should use these logical modules:

```text
config
security
auth
user
challenge
university
matching
project
team
proposal
milestone
notification
messaging
analytics
ml
file
audit
common
```

Each module should preferably contain:

```text
controller
service
repository
entity
dto
mapper
exception
```

Only create subpackages that are actually needed.

---

# 6. Frontend Architecture

React is responsible for:

* UI
* Navigation
* Form handling
* API communication
* Client-side validation
* Displaying backend data
* Role-based UI visibility

React must NOT be treated as the security layer.

Backend authorization is authoritative.

---

# 7. Mobile Architecture

Android is responsible for:

* Mobile UI
* Camera
* Gallery
* Location
* Device speech recognition
* API communication
* Local UI state

Android uses the same backend as the React application.

There is no second backend.

---

# 8. ML Architecture

ML classification is a backend capability.

The model should provide:

```text
predicted domain
confidence score
model version
prediction timestamp
```

Low-confidence predictions must support manual/admin verification.

The ML system must be explainable and must not become an opaque recommendation engine.

---

# 9. Matching Architecture

University matching is an explainable weighted scoring system.

Initial weights:

```text
Domain Match          40%
Faculty Expertise     25%
Research Area         20%
Innovation Facilities 10%
Location Suitability   5%
```

The matching result must contain both:

* score
* reasons for the score

---

# 10. File Storage

Large binary files must NOT be stored directly in PostgreSQL.

PostgreSQL stores file metadata.

Actual files are stored in filesystem/object storage.

The storage implementation must be replaceable without changing the core challenge/project domain model.

---

# 11. Security Principle

Security is enforced by the backend.

The backend must validate:

* Authentication
* Authorization
* Ownership
* Role
* Input
* File uploads
* Resource access

Never trust role information, IDs, permissions, or ownership claims supplied by the client.

---

# 12. Source of Truth

For business rules:

Backend is authoritative.

For database structure:

PostgreSQL/Flyway is authoritative.

For API contracts:

`docs/api.md` is authoritative.

For Git workflow:

`docs/git-workflow.md` is authoritative.

For database conventions:

`docs/database.md` is authoritative.

For shared enum/status values:

`docs/enums.md` is authoritative.
