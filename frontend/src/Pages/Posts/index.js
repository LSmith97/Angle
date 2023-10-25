import { useEffect, useState } from 'react'
import { getPosts } from "../../Utilities/post-service"
import { Link } from "react-router-dom"
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
            return <Link to={`/posts/${post._id}`} ><PostContainer key={post._id} post={post} /></Link>
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
        <div className='post-list'>
            {postList ? loaded() : loading()}
        </div>
    )
}

export default Posts