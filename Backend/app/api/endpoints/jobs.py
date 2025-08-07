from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ...database import get_db
from ... import crud, schemas
from ..deps import get_current_active_user

router = APIRouter()


@router.get("/", response_model=List[schemas.Job])
def read_jobs(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    jobs = crud.get_jobs(db, skip=skip, limit=limit)
    return jobs


@router.get("/{job_id}", response_model=schemas.Job)
def read_job(job_id: int, db: Session = Depends(get_db)):
    db_job = crud.get_job(db, job_id=job_id)
    if db_job is None:
        raise HTTPException(status_code=404, detail="Job not found")
    return db_job


@router.post("/", response_model=schemas.Job)
def create_job(
    job: schemas.JobCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_active_user)
):
    return crud.create_job(db=db, job=job)


@router.put("/{job_id}", response_model=schemas.Job)
def update_job(
    job_id: int,
    job_update: schemas.JobUpdate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_active_user)
):
    db_job = crud.update_job(db, job_id=job_id, job_update=job_update)
    if db_job is None:
        raise HTTPException(status_code=404, detail="Job not found")
    return db_job


@router.delete("/{job_id}")
def delete_job(
    job_id: int,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_active_user)
):
    success = crud.delete_job(db, job_id=job_id)
    if not success:
        raise HTTPException(status_code=404, detail="Job not found")
    return {"message": "Job deleted successfully"}
