function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-deepnavy bg-white">
      <div className="max-w-3xl w-screen px-52 flex justify-start">
        <a href="/">
          <img src="/news_logo.png" alt="NEWS 로고" className="h-14 w-36" />
        </a>
        {/* <span className="text-3xl text-red-500 font-bold">NEWS</span> */}
      </div>
    </nav>
  );
}
export default Nav;
