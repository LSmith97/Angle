import {useState} from 'react' 
import Dropzone from 'react-dropzone'

function UploadForm() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
  
    const handleDrop = (droppedFiles) => {
      // Handle the dropped files here
      setUploadedFiles(droppedFiles);
    };
      return (
        <div>
          <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag upload images here/Click to Select</p>
              </div>
            )}
          </Dropzone>
          {uploadedFiles.map((file, index) => (
            <div key={index}>
              {file.name} - {file.size} bytes
            </div>
          ))}
        </div>
      );
}

export default UploadForm;
