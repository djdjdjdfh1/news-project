# app/routes/crawl.py
from fastapi import APIRouter, Query
from app.services.crawler import get_google_news_articles

router = APIRouter()

@router.get("/search")
def search(keyword: str = Query(...), size: int = Query(10, ge=1)):
    return get_google_news_articles(keyword, size)
