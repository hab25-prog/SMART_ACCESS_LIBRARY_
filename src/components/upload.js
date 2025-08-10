import React, { useState } from "react";

const UploadDocument = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "Research Paper Title",
    author: "John Doe",
    category: "Science",
    fileType: "PDF",
    access: "Internal",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file ?? null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="upload-container">
      <h2>Upload Document</h2>
      <label htmlFor="file-upload" className="file-drop">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="none"
          stroke="#2c3e50"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-upload"
          viewBox="0 0 24 24"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        Drag and drop file here, or click to select
        <input
          id="file-upload"
          type="file"
          className="hidden-file-input"
          onChange={handleFileChange}
        />
      </label>
      {selectedFile && (
        <p className="file-selected">Selected: {selectedFile.name}</p>
      )}

      <form className="upload-form">
        <label>
          Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
        </label>

        <label>
          Author
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
          />
        </label>

        <div className="form-row">
          <div>
            <label htmlFor="category-select">Category</label>
            <select
              id="category-select"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option>Science</option>
              <option>Technology</option>
              <option>Education</option>
            </select>
          </div>
          <div>
            <label htmlFor="filetype-select">File Type</label>
            <select
              id="filetype-select"
              name="fileType"
              value={formData.fileType}
              onChange={handleChange}
            >
              <option>PDF</option>
              <option>DOCX</option>
              <option>PPT</option>
            </select>
          </div>
        </div>

        <fieldset className="radio-group">
          <legend>Access</legend>
          {["Confidential", "Internal", "Public"].map((option) => (
            <label key={option} className="radio-label">
              <input
                type="radio"
                name="access"
                value={option}
                checked={formData.access === option}
                onChange={handleChange}
              />
              {option}
            </label>
          ))}
        </fieldset>

        <button type="button" className="upload-button">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadDocument;
