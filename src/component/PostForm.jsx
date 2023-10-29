import MyButton from "./UI/button/MyButton";
import { MyInput } from "./UI/input/MyInput";
import { useState } from "react";
const PostForm = ({create}) =>{
    const [posts, setPosts] = useState({ title: "", body: "" });
    const addNewpost = (e) => {
        e.preventDefault();
        const newPost = {
           ...posts, id: Date.now() 
        } 
        create(newPost)
        setPosts({ title: "", body: "" });
    }
    return(
    <form>
    <MyInput
      value={posts.title}
      placeholder="Заголовок"
      onChange={(e) => setPosts({ ...posts, title: e.target.value })}
    />
    <MyInput
      value={posts.body}
      placeholder="Текст"
      onChange={(e) => setPosts({ ...posts, body: e.target.value })}
    />
    <MyButton onClick={addNewpost}>add post</MyButton>
  </form>
    )
};
export default PostForm;