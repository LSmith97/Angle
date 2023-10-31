import "./PostForm.css";
import { useState } from "react";
import Dropzone from "react-dropzone";

function PostForm({ submit, formData, setFormData }) {
  const handleDrop = (droppedFiles) => {
    // Handle the dropped files here
    setFormData({ ...formData, uploads: [...droppedFiles, ...formData.uploads] });
  };

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
        maxlength="500"
        name="body"
        value={formData.body}
        placeholder=" Enter your post here"
        onChange={handleChange}
        required
      ></textarea>

      <div>
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag upload images here/Click to Select</p>
            </div>
          )}
        </Dropzone>
        {formData.uploads.map((upload, index) => (
          <div key={index}>
            {upload.name} - {upload.size} bytes
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;
