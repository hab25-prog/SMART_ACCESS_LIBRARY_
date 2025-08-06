import React from "react";
import "./upload.css";

const fileBlocks = [
  { title: "Landing Visuals", type: "Image", date: "Aug 4" },
  { title: "System Spec Sheet", type: "PDF", date: "Aug 2" },
  { title: "Brand Guidelines", type: "DOCX", date: "Jul 31" },
];

const Upload = () => {
  return (
    <div className="upload-page">
      <h1>Upload Center</h1>

      <div className="upload-grid">
        {fileBlocks.map((file, index) => (
          <div key={index} className="upload-card">
            <div className="thumbnail-placeholder" />
            <div className="file-meta">
              <strong>{file.title}</strong>
              <p>Type: {file.type}</p>
              <p>Uploaded: {file.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upload;
