import { useState } from "react"
import PostForm from "../../Components/PostForm"

function NewPost() {
    const [formData, setFormData] = useState({
        title: "",
        body: ""
    })

    return(
        <>
        <h1>New</h1>
        <PostForm formData={formData} setFormData={setFormData}/>
        </>
    )
}

export default NewPost