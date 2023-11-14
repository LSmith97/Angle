import "./PostForm.css";
import { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import {createUploads} from "../../Utilities/cloudinary-service"
function PostForm({ submit, formData, setFormData, uploadsData, setUploadsData }) {

  const handleDrop = (droppedFiles) => {
    // Handle the dropped files here
    setUploadsData([...uploadsData, ...droppedFiles]);
  };
useEffect(()=>{handleUploads()}, [uploadsData])

async function handleUploads() { 
      try  { 
      const res =  await createUploads(uploadsData) 
      console.log(res)
      } 
      catch (err) {

      } 

  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={submit} className="post-form">
      <input
        id="title-input"
        type="text"
        name="title"
        value={formData.title}
        placeholder="Enter a title"
        onChange={handleChange}
        required
      />

      <textarea
        id="body-input"
        rows="4"
        cols="25"
        maxLength="500"
        name="body"
        value={formData.body}
        placeholder="Enter your post here"
        onChange={handleChange}
        required
      ></textarea>

        <Dropzone onDrop={handleDrop} >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag upload images here/Click to Select</p>
            </div>
          )}
        </Dropzone>
        {uploadsData.map((upload, index) => (
          <div key={index}>
            {upload.name} - {upload.size} bytes 
          </div>
        ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;
