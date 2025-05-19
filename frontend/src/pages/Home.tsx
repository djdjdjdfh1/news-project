function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen">
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-deepnavy bg-white">
        <div className="max-w-3xl w-screen px-52 flex justify-start">
          <img src="/news_logo.png" alt="NEWS 로고" className="h-14 w-36" />
          {/* <span className="text-3xl text-red-500 font-bold">NEWS</span> */}
        </div>
      </nav>
      <div className="h-20" />
      <div className="w-full px-52 flex flex-col items-center">
        <section className="border-b border-deepnavy p-2 flex items-center gap-2 mb-8 w-full max-w-3xl mx-auto">
          <input
            type="text"
            className="flex-1 border rounded px-2 py-1 bg-transparent border-none"
          />
          <button className="bg-deepnavy text-white px-6 py-2 rounded">
            검색
          </button>
        </section>
        <section
          className="flex flex-wrap gap-2 mb-8"
          aria-label="카테고리 버튼"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <button
              key={i}
              className="bg-deepnavy text-white px-6 py-2 rounded"
            >
              버튼
            </button>
          ))}
        </section>
        <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <article
              key={n}
              className="border border-deepnavy p-4 rounded-lg flex flex-col items-start"
            >
              {/* <img src="" alt="" className="mb-2 w-32 h-20 object-cover bg-gray-200" /> */}
              <img
                src="/news_image.png"
                alt="뉴스 이미지"
                className="mb-2 w-full h-40 object-cover bg-gray-100 rounded"
              />
              <span className="text-gray-700 text-center">뉴스 날짜</span>
              <h2 className="text-2xl font-semibold mb-2">뉴스 제목</h2>
              <p className="text-gray-700 text-center">뉴스 내용</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
export default Home;
