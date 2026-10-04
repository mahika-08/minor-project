# API Contracts #
# LokNexus API Contract

## 1. API Base Path

All application APIs use:

/api

Example:

/api/auth/login
/api/challenges
/api/projects

# 2. Protocol

Production:

HTTPS

Development:

HTTP localhost

Data format:

JSON

Character encoding:

UTF-8

# 3. Authentication

Authentication uses:

JWT Bearer Authentication


Client sends:

Authorization: Bearer <access-token>

Protected endpoints require a valid access token unless explicitly marked public.


# 4. Standard HTTP Methods

GET     Retrieve
POST    Create
PUT     Replace/update
PATCH   Partial update when required
DELETE  Delete

Do not use POST for every operation.


# 5. Standard HTTP Status Codes

200 OK
201 CREATED
204 NO_CONTENT
400 BAD_REQUEST
401 UNAUTHORIZED
403 FORBIDDEN
404 NOT_FOUND
409 CONFLICT
422 UNPROCESSABLE_ENTITY
429 TOO_MANY_REQUESTS
500 INTERNAL_SERVER_ERROR

# 6. Standard Error Response

All backend errors should follow:

{
  "timestamp": "2026-10-04T12:00:00Z",
  "status": 400,
  "error": "VALIDATION_ERROR",
  "message": "Challenge title is required",
  "path": "/api/challenges"
}

Do not expose:

* stack traces
* database errors
* passwords
* JWT secrets
* internal infrastructure information

# 7. Authentication APIs

## Register


POST /api/auth/register


Example:

{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "password": "secure-password"
}

Public registration must NOT allow arbitrary privileged role assignment.

---

## Login

```http
POST /api/auth/login
```

Request:

```json
{
  "email": "rahul@example.com",
  "password": "secure-password"
}
```

Response:

```json
{
  "accessToken": "jwt-token",
  "tokenType": "Bearer",
  "expiresIn": 3600,
  "user": {
    "id": 1,
    "name": "Rahul Sharma",
    "email": "rahul@example.com",
    "roles": [
      "CITIZEN"
    ]
  }
}
```

---

## Current User

```http
GET /api/auth/me
```

Requires authentication.

---

# 8. User APIs

```http
GET /api/users/me
PUT /api/users/me
GET /api/users/{id}
```

Administrative user management:

```http
GET /api/users
PUT /api/users/{id}/status
PUT /api/users/{id}/roles
```

These administrative endpoints require appropriate authorization.

---

# 9. Challenge APIs

## Create Challenge

```http
POST /api/challenges
```

---

## List Challenges

```http
GET /api/challenges
```

Supported query parameters:

```text
page
size
sort
status
domain
priority
location
search
```

Example:

```text
GET /api/challenges?page=0&size=20&status=VALIDATED
```

---

## Get Challenge

```http
GET /api/challenges/{id}
```

---

## Update Challenge

```http
PUT /api/challenges/{id}
```

---

## My Challenges

```http
GET /api/users/me/challenges
```

---

# 10. Challenge Status

```http
GET /api/challenges/{id}/status
PUT /api/challenges/{id}/status
GET /api/challenges/{id}/status-history
```

Status transitions are controlled by backend business rules.

Clients cannot arbitrarily assign any status.

---

# 11. Challenge Attachments

```http
POST   /api/challenges/{id}/attachments
GET    /api/challenges/{id}/attachments
DELETE /api/challenges/{id}/attachments/{attachmentId}
```

Use multipart/form-data for uploads.

Allowed initial file categories:

```text
IMAGE
VIDEO
PDF
DOCUMENT
```

Actual extension/MIME validation is performed server-side.

---

# 12. Domains

```http
GET /api/domains
GET /api/domains/{id}
GET /api/domains/{id}/subdomains
```

Administrative management:

```http
POST   /api/admin/domains
PUT    /api/admin/domains/{id}
DELETE /api/admin/domains/{id}
```

---

# 13. Universities

```http
GET /api/universities
GET /api/universities/{id}
GET /api/universities/{id}/departments
GET /api/universities/{id}/faculty
```

Administrative management:

```http
POST /api/admin/universities
PUT /api/admin/universities/{id}
DELETE /api/admin/universities/{id}
```

---

# 14. Matching

```http
GET /api/matching/challenges/{challengeId}
```

Response:

```json
{
  "challengeId": 101,
  "matches": [
    {
      "universityId": 10,
      "universityName": "Example University",
      "score": 87.5,
      "reasons": [
        "Domain match",
        "Faculty expertise match",
        "Research area match"
      ],
      "relevantDepartments": [],
      "relevantFaculty": []
    }
  ]
}
```

Matching must remain explainable.

---

# 15. Challenge Assignments

```http
GET  /api/challenges/{id}/assignments
POST /api/challenges/{id}/assignments
GET  /api/assignments/{id}
PUT  /api/assignments/{id}/accept
PUT  /api/assignments/{id}/reject
```

---

# 16. Projects

```http
POST /api/projects
GET  /api/projects
GET  /api/projects/{id}
PUT  /api/projects/{id}
```

Project creation should normally originate from an accepted/validated challenge.

---

# 17. Project Members

```http
GET    /api/projects/{id}/members
POST   /api/projects/{id}/members
DELETE /api/projects/{id}/members/{memberId}
```

---

# 18. Proposals

```http
GET  /api/projects/{id}/proposal
POST /api/projects/{id}/proposal
PUT  /api/projects/{id}/proposal
```

Proposal approval:

```http
PUT /api/projects/{id}/proposal/approve
PUT /api/projects/{id}/proposal/reject
```

---

# 19. Milestones

```http
GET    /api/projects/{id}/milestones
POST   /api/projects/{id}/milestones
GET    /api/milestones/{id}
PUT    /api/milestones/{id}
DELETE /api/milestones/{id}
```

---

# 20. Deliverables

```http
GET  /api/milestones/{id}/deliverables
POST /api/milestones/{id}/deliverables
GET  /api/deliverables/{id}
```

---

# 21. Impact

```http
GET  /api/projects/{id}/impact
POST /api/projects/{id}/impact
PUT  /api/impact/{id}
```

---

# 22. Feedback

```http
GET  /api/challenges/{id}/feedback
POST /api/challenges/{id}/feedback
GET  /api/projects/{id}/feedback
POST /api/projects/{id}/feedback
```

---

# 23. Notifications

```http
GET /api/notifications
PUT /api/notifications/{id}/read
PUT /api/notifications/read-all
```

---

# 24. Messaging

```http
GET  /api/messages
GET  /api/messages/{id}
POST /api/messages
```

Messaging access must be authorized based on conversation participation.

---

# 25. ML

```http
GET /api/challenges/{id}/classification
POST /api/admin/challenges/{id}/classification/override
```

ML prediction contains:

```text
predicted domain
confidence
model version
timestamp
```

Low-confidence predictions can be manually reviewed.

---

# 26. Dashboard APIs

```http
GET /api/dashboard/citizen
GET /api/dashboard/student
GET /api/dashboard/faculty
GET /api/dashboard/university
GET /api/dashboard/government
GET /api/dashboard/admin
```

---

# 27. Analytics

```http
GET /api/analytics/challenges
GET /api/analytics/projects
GET /api/analytics/impact
GET /api/analytics/universities
```

All analytics values must originate from real database data.

---

# 28. Pagination

Default:

```text
page = 0
size = 20
```

Maximum page size:

```text
100
```

Example:

```text
GET /api/challenges?page=0&size=20
```

---

# 29. API Contract Rule

Member 2 and Member 3 must consume these API contracts.

Do not invent duplicate endpoint structures.

If an API must change, update:

```text
docs/api.md
```

and notify the other developers before integration.

---

# 30. API Versioning

Initial version:

```text
/api
```

Do not introduce `/v1` unless versioning becomes necessary.

If a breaking API change is required later, the team must explicitly agree on the migration strategy.
