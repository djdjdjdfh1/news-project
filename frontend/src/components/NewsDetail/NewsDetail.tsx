import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface NewsData {
  title: string;
  content: string;
}

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setNews({
        title: `뉴스 제목 ${id}`,
        content: `뉴스 내용 ${id}번 상세 내용입니다.`,
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) return <div>로딩 중...</div>;

  if (!news) return <div>뉴스를 찾을 수 없습니다.</div>;

  return (
    <main className="p-8">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">뉴스 상세 보기</h1>
        <p className="text-sm text-gray-500 mb-8">기사 ID: {id}</p>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-2">기사 제목</h2>
          <p>
            여기에 실제 기사의 내용을 불러와서 표시합니다. 아직 API 연결
            전이므로, ID만 보여주고 있습니다. 추후 백엔드에서 ID에 따라 데이터를
            받아오면 여기에 표시할 수 있습니다.
          </p>
        </div>
      </div>
    </main>
  );
};

export default NewsDetail;
