import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { recommendedKeywords } from "../../constants/recommendedKeywords";

function Home() {
  const [keyword, setKeyword] = useState<string>("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (!keyword.trim()) return;
    navigate(`/search?keyword=${encodeURIComponent(keyword.trim())}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
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
          {recommendedKeywords.map((word) => (
            <button
              key={uuid()}
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
