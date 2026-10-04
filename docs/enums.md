# LokNexus Shared Enums

## User Roles

```text
CITIZEN
STUDENT
FACULTY
UNIVERSITY_ADMIN
GOVERNMENT
PLATFORM_ADMIN
```

---

# Challenge Status

```text
SUBMITTED
UNDER_REVIEW
VALIDATED
CLASSIFIED
MATCHED
ASSIGNED
TEAM_FORMING
PROPOSAL
APPROVED
IN_PROGRESS
PILOT
VALIDATION
DEPLOYED
IMPACT_MEASURED
COMPLETED
REJECTED
CANCELLED
```

---

# Priority

```text
LOW
MEDIUM
HIGH
CRITICAL
```

---

# Attachment Type

```text
IMAGE
VIDEO
PDF
DOCUMENT
```

---

# Project Member Role

```text
FACULTY_MENTOR
STUDENT
CO_MENTOR
```

---

# Proposal Status

```text
DRAFT
SUBMITTED
UNDER_REVIEW
APPROVED
REJECTED
```

---

# Milestone Status

```text
NOT_STARTED
IN_PROGRESS
COMPLETED
DELAYED
CANCELLED
```

---

# Notification Type

Notification types may expand as the system develops.

Use descriptive uppercase enum values.

---

# General Rule

Do not create a new shared enum value without checking this document.

When adding a new value:

1. Update docs/enums.md.
2. Notify the team.
3. Update backend.
4. Update React.
5. Update Android if applicable.
6. Update tests.
