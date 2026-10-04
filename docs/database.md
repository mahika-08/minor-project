# LokNexus Database Contract

## 1. Database

Primary database:

```text
PostgreSQL
```

ORM:

```text
Spring Data JPA / Hibernate
```

Migration tool:

```text
Flyway
```

Database schema changes must be performed through Flyway migrations.

Do not manually modify production database structure.

---

# 2. Naming Convention

Use:

```text
snake_case
```

Examples:

```text
user_roles
challenge_status_history
project_members
impact_measurements
```

Do NOT use:

```text
userRoles
ChallengeStatusHistory
projectMembers
```

---

# 3. Table Naming

Use plural lowercase nouns.

Examples:

```text
users
roles
universities
challenges
projects
notifications
```

---

# 4. Primary Keys

Every major entity uses:

```text
id
```

Use PostgreSQL-generated numeric identifiers initially.

Example:

```sql
id BIGSERIAL PRIMARY KEY
```

The application must not manually assign IDs.

---

# 5. Foreign Keys

Use:

```text
<singular_entity>_id
```

Examples:

```text
user_id
challenge_id
project_id
university_id
faculty_id
```

---

# 6. Timestamps

Use:

```text
created_at
updated_at
```

Use UTC timestamps.

Preferred PostgreSQL type:

```text
TIMESTAMP WITH TIME ZONE
```

---

# 7. Boolean Naming

Use descriptive names:

```text
is_active
is_verified
is_deleted
```

---

# 8. Enum Storage

Application enums should normally be stored as strings rather than database-specific enum types unless there is a strong reason otherwise.

Example:

```text
status = 'SUBMITTED'
```

This keeps migrations simpler.

---

# 9. Core Tables

The minimum domain includes:

```text
users
roles
user_roles

universities
university_departments
faculty
students

domains
sub_domains
challenge_categories

challenges
challenge_attachments
challenge_locations
challenge_status_history
challenge_assignments

projects
project_members
project_milestones
project_deliverables

proposals

impact_metrics
impact_measurements

feedback
notifications
messages

audit_logs
ml_predictions
```

---

# 10. User Relationships

Users are the central identity table.

Avoid duplicating:

```text
name
email
password
phone
```

across faculty/student/citizen tables.

Use the `users` table as the common identity.

Role-specific profile information may be stored in related tables.

---

# 11. User Roles

Role names are:

```text
CITIZEN
STUDENT
FACULTY
UNIVERSITY_ADMIN
GOVERNMENT
PLATFORM_ADMIN
```

---

# 12. Challenge

A challenge references:

```text
submitter
domain
category
priority
status
```

Do not duplicate submitter name/email inside the challenge.

Use:

```text
submitter_id
```

---

# 13. Location

Challenge location is represented separately:

```text
challenge_locations
```

This allows location data to evolve independently from the main challenge record.

Initial fields:

```text
id
challenge_id
latitude
longitude
address
created_at
updated_at
```

---

# 14. Attachments

Store metadata in PostgreSQL.

Example:

```text
id
challenge_id
file_name
stored_file_name
file_type
mime_type
file_size
storage_path
created_at
```

Actual binary file data should NOT be stored in PostgreSQL for large uploads.

---

# 15. Status History

Every important challenge status change must be recorded.

Example:

```text
id
challenge_id
old_status
new_status
changed_by
reason
created_at
```

---

# 16. ML Predictions

ML predictions use:

```text
ml_predictions
```

Fields:

```text
id
challenge_id
predicted_domain_id
confidence
model_version
created_at
```

Do not overwrite historical predictions.

Every new prediction creates a new record.

---

# 17. Matching

Matching results may be persisted when required for audit/reproducibility.

If persisted, use a dedicated matching table rather than storing JSON blobs inside the challenge table.

The scoring algorithm must remain explainable.

---

# 18. Project Members

Do not create separate student/faculty columns on projects.

Use:

```text
project_members
```

with fields representing:

```text
project
user
membership_role
joined_at
```

This supports multidisciplinary teams.

---

# 19. Audit Logs

Important actions must be auditable.

Example:

```text
id
user_id
action
entity_type
entity_id
old_value
new_value
ip_address
created_at
```

Do not store passwords or secrets in audit logs.

---

# 20. Soft Delete

Do not automatically add soft deletion to every table.

Use it only where required by the business/domain.

If used:

```text
is_deleted
deleted_at
```

---

# 21. Constraints

Use database constraints wherever appropriate.

Examples:

```text
NOT NULL
UNIQUE
FOREIGN KEY
CHECK
```

Business rules that are complex or workflow-dependent belong in the service layer.

---

# 22. Indexes

Add indexes based on real query requirements.

Likely indexed fields include:

```text
users.email
challenges.status
challenges.domain_id
challenges.submitter_id
challenge_status_history.challenge_id
projects.challenge_id
notifications.user_id
ml_predictions.challenge_id
```

Do not add unnecessary indexes everywhere.

---

# 23. Migrations

Migration naming:

```text
V1__create_users_and_roles.sql
V2__create_universities.sql
V3__create_challenges.sql
```

Use:

```text
V<number>__<description>.sql
```

Never modify an already-applied migration.

Create a new migration instead.

---

# 24. Seed Data

Seed/demo data must be clearly identifiable as:

```text
DEMO
SAMPLE
```

Do not fabricate real-world university capabilities.

If real institutional information is used, verify the source.

---

# 25. Ownership

Member 1 owns the database migration integration.

Other developers may propose schema changes.

They must not independently create conflicting migrations.

Database changes must be discussed before merging into `develop`.

---

# 26. Golden Rule

Do not duplicate data merely because it is convenient for one frontend screen.

Prefer normalized relational data.

Denormalized reporting structures can be introduced later if a real performance requirement exists.
