import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hook/useFetching";
import PostService from "../API/PostService";
import { Loader } from "../component/UI/extends/Loader";

const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comm, setComm] = useState([]);
    const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });
    const [fetchCommentById, isComLoading, errorCom] = useFetching(async (id) => {
        const response = await PostService.getByComment(id);
        setComm(response.data);
    });

    useEffect(() =>{
        fetchPostsById(params.id);
        fetchCommentById(params.id);
    }, [])
    return (
        <div>
            {isLoading
             ? <Loader />
             : <h1>{post.id} {post.title}</h1>}
                <h1>Comments:</h1>
             {
                isComLoading
                ? <Loader />
                : <div>
                    {comm.map(com => 
                       <div>
                        <strong>{com.email}</strong>
                        <div>{com.body}</div>
                       </div>
                    )}
                </div>
                }
            
        </div>
    )
}
export default PostPage;