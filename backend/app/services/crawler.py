# app/services/crawler.py
import feedparser
import requests
import re
from bs4 import BeautifulSoup

def clean_html(description: str) -> str:
    """HTML 태그를 제거하고 순수 텍스트만 추출"""
    # 링크를 제외한 모든 HTML 태그를 제거
    clean_text = re.sub(r'<[^>]+>', '', description)
    return clean_text

def get_google_news_articles(keyword: str, size: int):
    rss_url = f"https://news.google.com/rss/search?q={keyword}"
    feed = feedparser.parse(rss_url)
    
    articles = []
    for entry in feed.entries[:size]:
        description = entry.get('description', '')
        clean_description = clean_html(description)  # HTML 태그 제거

        # 기사 내용을 200자 이내로 자르기
        summary = clean_description[:200] + '...' if len(clean_description) > 200 else clean_description
        
        article = {
            "title": entry.title,
            "link": entry.link,
            "published": entry.published,
            "description": summary,  # 정리된 요약 추가
            "author": entry.get('author', 'Unknown author'),
            "guid": entry.get('guid', ''),
            "categories": entry.get('categories', []),
            "source": entry.get('source', {}).get('title', 'Unknown source'),
            "image": get_article_image(entry.link)  # 기사 이미지 추출
        }
        articles.append(article)
    
    return articles

def get_article_image(url: str) -> str:
    try:
        # 기사 링크에서 HTML 파싱하여 이미지 URL을 추출
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')

        # 'og:image' 메타 태그를 통해 이미지 URL을 찾음
        og_image = soup.find('meta', property='og:image')
        if og_image:
            return og_image.get('content')
        
        # 'meta name="image"' 태그를 찾을 수 있다면 사용
        meta_image = soup.find('meta', attrs={'name': 'image'})
        if meta_image:
            return meta_image.get('content')

        # 'img' 태그에서 첫 번째 이미지를 추출
        first_img = soup.find('img')
        if first_img:
            return first_img.get('src')
    
    except Exception as e:
        print(f"Error fetching image for {url}: {e}")

    return ""  # 이미지가 없으면 빈 문자열 반환