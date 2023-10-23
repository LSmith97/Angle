import { useEffect, useState } from 'react'
import { getPosts } from "../../utilities/post-service"
import './Posts.css'

function Posts() {
    const [postList, setPostList] = useState(null)

    useEffect(()=>{
        handleRequest();
    },[])

    async function handleRequest(){
        try {
            const postData = await getPosts()
            setPostList(postData)
        } catch (err) {
            console.log(err)
        }
    }

    function loaded(){
        return(
            <h1>loaded</h1>
        )
    }

    function loading(){
        return(
            <h1>Loading...</h1>
        )
    }

    return(
        <>
            {postList ? loaded() : loading()}
        </>
    )
}

export default Posts