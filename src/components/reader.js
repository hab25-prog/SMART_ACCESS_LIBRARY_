import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./PdfReader.css";

// Set workerSrc for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfReader = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const goToPrevPage = () =>
    setPageNumber((prev) => (prev <= 1 ? 1 : prev - 1));
  const goToNextPage = () =>
    setPageNumber((prev) => (prev >= numPages ? numPages : prev + 1));

  return (
    <div className="pdf-reader-container" role="region" aria-label="PDF Reader">
      <header className="pdf-reader-header">
        <div className="filename" aria-label="File name">
          <span>📄</span> {file.name}
        </div>
        <div className="pdf-reader-actions">
          <button
            onClick={() => window.print()}
            aria-label="Print PDF"
            title="Print"
            className="action-btn"
          >
            🖨️
          </button>
          <a
            href={file.url}
            download={file.name}
            aria-label="Download PDF"
            title="Download"
            className="action-btn"
          >
            ⬇️
          </a>
        </div>
      </header>

      <Document
        file={file.url}
        onLoadSuccess={onDocumentLoadSuccess}
        loading="Loading PDF..."
      >
        <Page pageNumber={pageNumber} loading="Loading page..." />
      </Document>

      <footer className="pdf-reader-footer" aria-label="Page navigation">
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          aria-label="Previous page"
        >
          &lt;
        </button>
        <span>
          {pageNumber} of {numPages || "--"}
        </span>
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          aria-label="Next page"
        >
          &gt;
        </button>
      </footer>
    </div>
  );
};

export default PdfReader;
