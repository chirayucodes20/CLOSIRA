# Closira Backend API

## Quick Setup & Run Instructions
Follow these steps to run the project locally without any external dependencies.

1. Install dependencies:
pip install -r requirements.txt

2. Run the server:
uvicorn main:app --reload

3. Test the API:
- Interactive API Docs (Swagger UI): Open http://127.0.0.1:8000/docs in your browser.
- HTTP Client: You can also test the endpoints using the provided test_api.http file via VS Code's REST Client extension.

-------------------------------------------------

## API Endpoints

Method: GET
Endpoint: /health
Description: Returns API status and database connectivity.

Method: POST
Endpoint: /enquiry
Description: Creates a new inbound enquiry and triggers the async SOP matching task.

Method: POST
Endpoint: /enquiry/{id}/follow-up
Description: Schedules a follow-up for an open enquiry with a delay in minutes.

Method: POST
Endpoint: /enquiry/{id}/escalate
Description: Marks an enquiry as escalated to a human agent along with a reason.

Method: GET
Endpoint: /enquiry/{id}/history
Description: Returns the full conversation history and status timeline for an enquiry.

-------------------------------------------------

## Engineering Decisions & Justifications

### 1. Database: SQLite vs PostgreSQL
Decision: I chose SQLite for this prototype.
Reasoning: The assignment emphasized a "lightweight backend service" and a seamless setup experience for reviewers. SQLite requires zero external installation, meaning a reviewer can run this project instantly without configuring a local PostgreSQL server or Docker container. For a production, tenant-aware system handling high concurrency, PostgreSQL would be the absolute choice.

### 2. Async Processing: FastAPI Background Tasks vs Celery
Decision: I chose FastAPI Background Tasks over Celery.
Reasoning: While Celery is the industry standard for robust background jobs, it requires an external message broker (like Redis or RabbitMQ) and running a separate worker process. Given that the simulated SOP matching is a fast, CPU-lightweight task, introducing Celery would add unnecessary infrastructure complexity. BackgroundTasks keeps the service self-contained and easy to review while successfully fulfilling the asynchronous processing requirement.

-------------------------------------------------

## Trade-offs & Known Limitations

* No Authentication: API endpoints are currently unprotected to keep testing frictionless and straightforward.
* SOP Matching Logic: Currently using simple hardcoded substring matching rather than an actual NLP classification model, aligning with the scope of the assignment.
* In-Memory Logging: Structured JSON logs are printed to the console rather than shipped to an external observability service (like Datadog or ELK).
