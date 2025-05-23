import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const recommendedKeywords = [
    "프론트엔드",
    "인공지능",
    "IT",
    "경제",
    "사회",
    "정치",
    "문화",
    "스포츠",
  ];

  const handleSearch = () => {
    if (!keyword.trim()) return;
    navigate(`/search?keyword=${encodeURIComponent(keyword.trim())}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* <img src="/news_logo.png" alt="NEWS 로고" className="h-14 w-36 mb-24" /> */}

      <section className="border-b border-deepnavy p-2 flex items-center gap-2 mb-8 w-full max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 bg-transparent outline-none px-2 py-1"
        />
        <button
          onClick={handleSearch}
          className="bg-deepnavy text-white px-6 py-2 rounded flex items-center justify-center"
        >
          검색
        </button>
      </section>

      <div className="w-full max-w-3xl">
        <p className="mb-3 text-lg font-medium">추천 검색어</p>
        <div className="flex flex-wrap gap-3">
          {recommendedKeywords.map((word, i) => (
            <button
              key={i}
              onClick={() =>
                navigate(`/search?keyword=${encodeURIComponent(word)}&size=9`)
              }
              className="bg-gray-300 rounded-full px-4 py-2 hover:bg-deepnavy hover:text-white transition"
            >
              {word}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
