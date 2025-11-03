import React, { useRef, useState } from "react";
import { GrAttachment } from "react-icons/gr";

const AttachmentUploader = ({
  onFilesChange,
  maxSizeMB = 20,
  style = "",
}) => {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);

  // handle file select
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(
      (file) => file.size <= maxSizeMB * 1024 * 1024
    );

    if (validFiles.length !== selectedFiles.length) {
      alert(`Some files exceed ${maxSizeMB}MB limit and were ignored.`);
    }

    setFiles(validFiles);
    onFilesChange && onFilesChange(validFiles);
  };

  // handle drag-drop
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(
      (file) => file.size <= maxSizeMB * 1024 * 1024
    );

    if (validFiles.length !== droppedFiles.length) {
      alert(`Some files exceed ${maxSizeMB}MB limit and were ignored.`);
    }

    setFiles(validFiles);
    onFilesChange && onFilesChange(validFiles);
  };

  return (
    <div
      className={style}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <div
        className="flex items-center gap-x-4 cursor-pointer"
        onClick={() => fileInputRef.current.click()}
      >
        <div className="border border-blue-600 text-blue-600 rounded-full w-12 h-12 flex justify-center items-center">
          <GrAttachment className="text-xl" />
        </div>
        <p>
          <span className="text-blue-600 font-medium">Attachment(s)</span> Up to{" "}
          {maxSizeMB} MB
        </p>
      </div>

      <input
        type="file"
        multiple
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      {files.length > 0 && (
        <div className="mt-3 border-t pt-2">
          <p className="text-sm font-medium mb-1 text-gray-600">
            Attached Files:
          </p>
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
            {files.map((file, idx) => (
              <li key={idx}>
                {file.name}{" "}
                <span className="text-gray-400">
                  ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AttachmentUploader;
