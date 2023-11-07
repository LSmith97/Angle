import * as uploadsAPI from "./uploads-api";

export async function insertUploads(id, data) {
    try {
      const newUploads = await uploadsAPI.create(id, data);
      return newUploads;
    } catch (err) {
      throw err;
    }
  }