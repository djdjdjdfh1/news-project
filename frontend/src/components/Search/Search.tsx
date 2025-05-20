function Search() {
  const dummyResults = [
    {
      id: 1,
      title: "AI, 일상 속으로…인공지능 서비스 확산",
      summary:
        "인공지능이 생활 전반에 빠르게 적용되고 있다. 기업들은 고객 맞춤형 서비스를...",
    },
    {
      id: 2,
      title: "生成AI로 보는 콘텐츠의 미래",
      summary:
        "생성형 인공지능 기술은 콘텐츠 산업의 판도를 바꿀 수 있을 것으로 기대된다...",
    },
  ];

  return (
    <div className="min-h-screen text-gray-800 w-full px-52 flex flex-col items-center">
      <section className="border-b border-deepnavy p-2 flex items-center gap-2 mb-8 w-full max-w-3xl mx-auto">
        <input
          type="text"
          className="flex-1 border rounded px-2 py-1 bg-transparent border-none"
        />
        <button className="bg-deepnavy text-white px-6 py-2 rounded">
          검색
        </button>
      </section>
      <section className="px-6 py-4">
        <p className="text-lg font-medium">
          <span className="text-deepnavy font-bold">"인공지능"</span>에 대한
          검색 결과
        </p>
        <p className="text-sm text-gray-500 mt-1">
          총 {dummyResults.length}건의 뉴스를 찾았습니다.
        </p>
      </section>

      <main className="flex flex-col gap-4 px-6 pb-12 w-full">
        {dummyResults.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-xl p-5 border border-transparent hover:border hover:border-deepnavy transition cursor-pointer"
            onClick={() => (window.location.href = `/newsDetail/${item.id}`)}
          >
            <h2 className="text-lg font-semibold mb-1 text-deepnavy">
              {item.title}
            </h2>
            <p className="text-sm text-gray-600">{item.summary}</p>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Search;
