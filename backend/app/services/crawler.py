import requests
from bs4 import BeautifulSoup

def crawl_naver_blog(keyword):
    url = f"https://search.naver.com/search.naver?query={keyword}"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")
    
    # 검색 결과에서 기사 링크만 추출
    links = []
    
    for tag in soup.find_all('a', href=True):  # href 속성 있는 'a' 태그 찾기
        link = tag['href']
        
        # 네이버 블로그 기사 링크는 특정 패턴을 가짐
        if 'blog.naver.com' in link:
            if link.startswith('http'):
                links.append(link)

    return links

# 예시: 'ai' 키워드로 네이버 블로그 크롤링
keyword = 'ai'
links = crawl_naver_blog(keyword)
for link in links:
    print(link)
