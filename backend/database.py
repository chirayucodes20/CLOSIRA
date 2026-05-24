from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# SQLite database file ka naam
SQLALCHEMY_DATABASE_URL = "sqlite:///./closira.db"

# Engine create karna (check_same_thread=False sirf SQLite ke liye zaroori hai FastAPI mein)
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# DB session get karne ke liye helper function
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()