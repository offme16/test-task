import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hook/useFetching";
import PostService from "../API/PostService";
import { Loader } from "../component/UI/extends/Loader";
import s from "./PostPage.module.css"
import avatar from "../assets/images/useravatar.png"
const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comm, setComm] = useState([]);
    const [user, setUser] = useState([]);
    const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });
    const [fetchCommentById, isComLoading, errorCom] = useFetching(async (id) => {
        const response = await PostService.getByComment(id);
        setComm(response.data);
    });
    const [fetchUser, isUseLoading, errorUse] = useFetching(async (id) => {
        const response = await PostService.getByUser(id);
        setUser(response.data);
    });

    useEffect(() =>{
        fetchPostsById(params.id);
        fetchCommentById(params.id);
        fetchUser(params.id)
    }, [])
    return (
        <div className={s.Container}>
            {isUseLoading
             ? <Loader />
             : <div className={s.Users}>
                    <img src={avatar}/>
                    <div className={s.Users__name}>
                        <h2>{user.name}</h2>
                        <strong>{user.username}</strong>
                    <div className={s.Users__info}>
                        <p>Email: {user.email}</p>
                        <p>Tel: {user.phone}</p>
                        <p>Web: {user.website}</p>
                    </div>
                    </div>
                </div>}
            
                <h1>Посты:</h1>
        </div>
    )
}
export default PostPage;