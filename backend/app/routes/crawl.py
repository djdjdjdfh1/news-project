# app/routes/crawl.py
from fastapi import APIRouter, Query
from app.services.crawler import crawl_naver_blog

router = APIRouter()

@router.get("/search")
def search(keyword: str = Query(...)):
    return crawl_naver_blog(keyword)
