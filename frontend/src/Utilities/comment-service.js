import * as commentAPI from "./comment-api";

export async function createComment(data) {
  try {
    const newComment = await commentAPI.create(data);
    return newComment;
  } catch (err) {
    throw err;
  }
}

export async function deleteComment(id) {
  try {
    const data = await commentAPI.destroy(id);
    return data;
  } catch (err) {
    throw err;
  }
}

export async function updateComment(id, data) {
  try {
    const updated = await commentAPI.update(id, data);
    return updated;
  } catch (err) {
    throw err;
  }
}

export async function getOne(id) {
  try {
    const data = await commentAPI.detail(id);
    return data;
  } catch (err) {
    throw err;
  }
}