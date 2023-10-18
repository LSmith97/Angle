export interface Comment {
    _id: string,
    parentId: string,
    body: string
    isEdited: boolean,
    user?: string,
    userName?: string,
    userAvatar?: string,
}

export interface Post {
    _id: string,
    title: string,  
    body: string,
    comments: Array<Comment> 
    isEdited: boolean,
    user?: string,
    userName?: string,
    userAvatar?: string,
}