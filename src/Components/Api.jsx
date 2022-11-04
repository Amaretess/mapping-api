import { useState, useEffect } from "react";
import List from "./List";

const Posts = () => {

const [postsObj, setPostsObj] = useState()

useEffect(() => {
    const getPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        setPostsObj(data);
    }
    getPosts();
}, [])

return(
    <>
    <List posts={postsObj} />
    </>
    )

}

export default Posts
