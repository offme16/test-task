import { useEffect, useState } from "react";
import "../component/Style/App.css";
import PostList from "../component/PostList";
import PostForm from "../component/PostForm";
import PostFilter from "../component/PostFilter";
import MyModal from "../component/UI/MyModal/MyModal";
import MyButton from "../component/UI/button/MyButton";
import { usePost } from "../hook/usePost";
import PostService from "../API/PostService";
import { Loader } from "../component/UI/extends/Loader";
import { useFetching } from "../hook/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";
import Pagination from "../component/UI/pagination/Pagination";
function Posts() {
  const [post, setPost] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPost = usePost(post, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  let pagesArray = getPagesArray(totalPages);

  const [fetchPosts, isLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPost(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);
  const changePost = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };
  const createPost = (newPost) => {
    setPost([...post, newPost]);
    setModal(false);
  };
  //получаем пост из дочернего элемента
  const removePost = (posts) => {
    setPost(post.filter((e) => e.id !== posts.id));
  };

  return (
    <div className="App">
       <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <div className="app-vidgital">
        <PostFilter filter={filter} setFilter={setFilter} />
        <MyButton style={{position: "relative", top:"-42px" , left: "165px"}} onClick={() => setModal(true)}>
         Создать пост
        </MyButton>
      </div>
      {postError && <h1>{postError}</h1>}
      {isLoading ? (
        <Loader />
      ) : (
        <PostList
          postError
          remove={removePost}
          post={sortedAndSearchedPost}
        />
      )}
      <Pagination page={page} changePost={changePost} pagesArray={pagesArray} />
    </div>
  );
}

export default Posts;
