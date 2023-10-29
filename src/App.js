import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import { Header } from "./component/Header";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/*" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
