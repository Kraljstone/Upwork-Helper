# FastAPI Job Board Backend

A FastAPI application with PostgreSQL database for job board management.

## Features

- User authentication with JWT tokens
- Job CRUD operations
- PostgreSQL database with SQLAlchemy ORM
- Database migrations with Alembic
- RESTful API with automatic documentation

## Setup Instructions

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Set up PostgreSQL

Make sure PostgreSQL is installed and running on your system.

Create a database:

```sql
CREATE DATABASE job_board;
```

### 3. Environment Configuration

Copy the example environment file and configure it:

```bash
cp env.example .env
```

Edit `.env` file with your database credentials:

```
DATABASE_URL=postgresql://username:password@localhost:5432/job_board
```

### 4. Database Migrations

Initialize Alembic:

```bash
alembic init alembic
```

Create and run the initial migration:

```bash
alembic revision --autogenerate -m "Initial migration"
alembic upgrade head
```

### 5. Run the Application

```bash
python run.py
```

Or using uvicorn directly:

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## API Documentation

Once the application is running, you can access:

- **Interactive API docs**: http://localhost:8000/docs
- **Alternative API docs**: http://localhost:8000/redoc
- **Health check**: http://localhost:8000/health

## API Endpoints

### Authentication

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login and get access token

### Jobs

- `GET /api/v1/jobs/` - Get all jobs
- `GET /api/v1/jobs/{job_id}` - Get a specific job
- `POST /api/v1/jobs/` - Create a new job (requires authentication)
- `PUT /api/v1/jobs/{job_id}` - Update a job (requires authentication)
- `DELETE /api/v1/jobs/{job_id}` - Delete a job (requires authentication)

## Project Structure

```
Backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI application
│   ├── config.py            # Configuration settings
│   ├── database.py          # Database connection
│   ├── models.py            # SQLAlchemy models
│   ├── schemas.py           # Pydantic schemas
│   ├── auth.py              # Authentication utilities
│   ├── crud.py              # CRUD operations
│   └── api/
│       ├── __init__.py
│       ├── api.py           # Main API router
│       ├── deps.py          # Dependencies
│       └── endpoints/
│           ├── __init__.py
│           ├── auth.py      # Auth endpoints
│           └── jobs.py      # Job endpoints
├── alembic/                 # Database migrations
├── requirements.txt         # Python dependencies
├── env.example             # Environment variables example
├── alembic.ini            # Alembic configuration
└── run.py                 # Application runner
```

## Development

### Adding New Models

1. Create the model in `app/models.py`
2. Create Pydantic schemas in `app/schemas.py`
3. Add CRUD operations in `app/crud.py`
4. Create API endpoints in `app/api/endpoints/`
5. Generate and run migrations:
   ```bash
   alembic revision --autogenerate -m "Add new model"
   alembic upgrade head
   ```

### Database Migrations

- Create a new migration: `alembic revision --autogenerate -m "Description"`
- Apply migrations: `alembic upgrade head`
- Rollback migration: `alembic downgrade -1`
- View migration history: `alembic history`

## Security Notes

- Change the `SECRET_KEY` in production
- Configure CORS properly for production
- Use environment variables for sensitive data
- Implement proper password policies
- Add rate limiting for production use
