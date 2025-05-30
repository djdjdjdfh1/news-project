import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { recommendedKeywords } from "../../constants/recommendedKeywords";

function Home() {
  const SEARCH_SIZE = 10;
  const [keyword, setKeyword] = useState<string>("");
  const navigate = useNavigate();

  // 공통 검색 함수 추출
  const navigateToSearch = useCallback(
    (word: string) => {
      const keywordValue = word.trim();
      if (!keywordValue) return;
      navigate(`/search?keyword=${keywordValue}&size=${SEARCH_SIZE}`);
    },
    [navigate]
  );

  // 검색 버튼 클릭용
  const handleSearch = useCallback(() => {
    navigateToSearch(keyword);
  }, [keyword, navigateToSearch]);

  // 외부에서 키워드 받는 경우
  const onKeywordBtnClick = useCallback(
    (word: string) => {
      navigateToSearch(word);
    },
    [navigateToSearch]
  );

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
              onClick={() => onKeywordBtnClick(word)}
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
