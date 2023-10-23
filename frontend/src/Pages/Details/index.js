import PostContainer from "../../Components/PostContainer"
import CommentList from "../../Components/CommentsList"

function Details({post, comment}) {
    return( 
        <div>
        <PostContainer/> 
        <CommentList/> 
        </div>
    )
}

export default Details