import { useEffect, useState } from "react";

type Article = {
  image?: string;
  published?: string;
  title?: string;
  description?: string;
  link?: string;
};

function Home() {
  const [keyword, setKeyword] = useState("프론트엔드");
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/search?keyword=${keyword}&size=9`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        console.error("뉴스 불러오기 실패:", error);
      });
  }, [keyword]);

  return (
    <main className="flex flex-col items-center justify-start min-h-screen">
      <div className="w-full px-52 flex flex-col items-center">
        {/* 검색 영역 */}
        <section className="border-b border-deepnavy p-2 flex items-center gap-2 mb-8 w-full max-w-3xl mx-auto">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="flex-1 border rounded px-2 py-1 bg-transparent border-gray-300"
          />
          <button
            onClick={() => {
              // keyword 값이 변경될 때마다 useEffect가 다시 실행됨
              setKeyword(keyword.trim());
            }}
            className="bg-deepnavy text-white px-6 py-2 rounded flex items-center justify-center"
          >
            검색
          </button>
        </section>

        {/* 뉴스 카드 */}
        <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.isArray(articles) &&
            articles.map((article, idx) => (
              <article
                key={idx}
                className="border border-deepnavy p-4 rounded-lg flex flex-col items-start"
              >
                <img
                  src={article.image || "/news_image.png"}
                  alt="뉴스 이미지"
                  className="mb-2 w-full h-40 object-cover bg-gray-100 rounded"
                />
                <span className="text-gray-700 text-sm">
                  {article.published}
                </span>
                <h2 className="text-xl font-semibold mb-1">{article.title}</h2>
                <p className="text-gray-700 text-sm mb-2">
                  {article.description}
                </p>
              </article>
            ))}
        </section>
      </div>
    </main>
  );
}

export default Home;
