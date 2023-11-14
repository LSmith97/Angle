import * as cloudinaryApi from './cloudinary-api.js' 

export async function createUploads(data) {
    try {
      const newUploads = await cloudinaryApi.create(data);
      return newUploads;
    } catch (err) {
      throw err;
    }
  }