import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Search from "./pages/SearchPage";
import NewsDetail from "./pages/NewsDetailPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/newsDetail/:id" element={<NewsDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
