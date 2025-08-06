import React, { useState } from "react";

const UploadDocument = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Document</h2>
      <div className="file-drop">
        <p>Drag & drop or click to select a file</p>
        <input type="file" onChange={handleFileChange} />
        {selectedFile && <p>Selected: {selectedFile.name}</p>}
      </div>
      <form className="upload-form">
        <input
          type="text"
          placeholder="Document Title"
          defaultValue="Research Paper Title"
        />
        <input type="text" placeholder="Author" defaultValue="John Doe" />
        <select defaultValue="Science">
          <option>Science</option>
          <option>Technology</option>
          <option>Education</option>
        </select>
        <select defaultValue="PDF">
          <option>PDF</option>
          <option>DOCX</option>
          <option>PPT</option>
        </select>
        <select defaultValue="Internal">
          <option>Internal</option>
          <option>Public</option>
          <option>Confidential</option>
        </select>
        <button type="button">Upload</button>
      </form>
    </div>
  );
};

export default UploadDocument;
