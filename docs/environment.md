# LokNexus Environment Contract

## Backend

Required:

```text
JAVA_VERSION=21
MAVEN
POSTGRESQL
```

Environment variables should include values similar to:

```text
DB_HOST
DB_PORT
DB_NAME
DB_USERNAME
DB_PASSWORD

JWT_SECRET
JWT_EXPIRATION

FILE_STORAGE_PATH
```

Exact names must remain consistent across environments.

---

# Frontend

Example:

```text
VITE_API_BASE_URL
```

Do not commit environment files containing secrets.

---

# Android

The backend base URL must be configurable.

Do not hard-code production URLs throughout the application.

---

# Secrets

Never commit:

```text
database passwords
JWT secrets
API keys
cloud credentials
private keys
```

Use environment variables or secret management.

---

# Git

Commit:

```text
.env.example
```

Do NOT commit:

```text
.env
```

unless it contains no secrets and is intentionally a sample configuration.

---

# Development Database

Each developer may use a local PostgreSQL instance or the agreed development Docker database.

Database credentials must not be hard-coded into Java source code.

---

# Production

Production secrets must be supplied by the deployment environment.
