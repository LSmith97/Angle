import post from "../../../../backend/models/post"
import PostContainer from "../../Components/PostContainer"

function Details({post, comment}) {
    return( 
        <div>
        <PostContainer/> 
        <CommentContainer/> 
        </div>
    )
}

export default Details