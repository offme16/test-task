import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import PostItem from "./PostItem";
const PostList = ({post, title, remove}) => {
  if(post.length === 0){
    return <h1 style={{ textAlign: "center" }}> НЕТ ПОСТОВ </h1>
  }
    return (
        <div className="App">
          <TransitionGroup>
          {post.map((e, index) => (
            <CSSTransition 
            key={e.id}
            timeout={500}
            classNames="post"
            >
            <PostItem remove={remove} number={index} post={e} />
            </CSSTransition>
          ))}
          </TransitionGroup>
        </div>
      );
}
export default PostList;