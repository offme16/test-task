import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";
const PostItem = (props) => {
  const router = useNavigate()
    return (
    <div className="box">
        <div className="box__text">
          <strong>{props.post.id}.{props.post.title}</strong>
          <p>{props.post.body}</p>
        </div>
        <div className="box__button">
          <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Открыть</MyButton>
          <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
      </div>
    )
}
export default PostItem;

