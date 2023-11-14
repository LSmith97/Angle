import { useState } from "react";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";


export default function App() {
  const [publicId, setPublicId] = useState("");
  // Replace with your own cloud name
  const {CLOUD_NAME} = process.env
  // Replace with your own upload preset

  const [uwConfig] = useState({
    cloudName: CLOUD_NAME
  });

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD_NAME
    }
  });

  const myImage = cld.image(publicId);

  return (
    <div>
      <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
    </div>
  );
}
