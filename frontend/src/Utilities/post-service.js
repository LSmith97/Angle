import * as postAPI from "./post-api";

export async function getPosts() {
  try {
    const data = await postAPI.index();
    return data;
  } catch (err) {
    throw err;
  }
}

export async function createPost(data) {
  try {
    const newPost = await postAPI.create(data);
    return newPost;
  } catch (err) {
    throw err;
  }
}

export async function getOne(id) {
  try {
    const data = await postAPI.detail(id);
    return data;
  } catch (err) {
    throw err;
  }
}

export async function deletePost(id) {
  try {
    const data = await postAPI.destroy(id);
    return data;
  } catch (err) {
    throw err;
  }
}

export async function updatePost(id, data) {
  try {
    const updatedPost = await postAPI.update(id, data);
    return updatedPost;
  } catch (err) {
    throw err;
  }
}
