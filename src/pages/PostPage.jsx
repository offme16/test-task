import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hook/useFetching";
import PostService from "../API/PostService";
import { Loader } from "../component/UI/extends/Loader";
import s from "./PostPage.module.css"
import UserProfile from "../component/UserProfile";
import PostList from "../component/PostList";
const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);
    const flag = 1;
    const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });
    const [fetchUser, isUseLoading, errorUse] = useFetching(async (id) => {
        const response = await PostService.getByUser(id);
        setUser(response.data);
    });

    useEffect(() =>{
        fetchPostsById(params.id);
        fetchUser(params.id)
    }, [])
    return (
        <div className={s.Container}>
            {isUseLoading
             ? <Loader />
             : <UserProfile user={user}/>}
                <h1>Посты:</h1>
            {isLoading
             ? <Loader />
             : <PostList post={post} flag={flag} />

            }
        </div>
    )
}
export default PostPage;