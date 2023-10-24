import PostContainer from "../../Components/PostContainer"
import CommentList from "../../Components/CommentsList"
import  {getOne} from "../../Utilities/post-service"
function Details({post, comment}) {
    return( 
        <div>
        <PostContainer/> 
        <CommentList/> 
        </div>
    )
}

export default Details