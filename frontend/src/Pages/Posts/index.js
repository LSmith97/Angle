import { useEffect, useState } from 'react'
import { getPosts } from "../../Utilities/post-service"
import PostContainer from "../../Components/PostContainer"
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

    function loaded() {
        const postEles = postList.map((post) => {
            return <PostContainer post={post} />
        });

        return(
            <div>
                {postEles}
            </div>
        )
    }

    function loading(){
        return(
            <h1>Loading...</h1>
        )
    }

    return(
        <div>
            {postList ? loaded() : loading()}
        </div>
    )
}

export default Posts