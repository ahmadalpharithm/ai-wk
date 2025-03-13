"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import UploadedFile from "./UploadedFile";
import { UploadPdfToUploadThing } from "@/actions/uploadThing";

function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      const fileSizeInKB = selectedFile.size / 1024;
      const maxSizeInKB = 10240; // 10MB

      if (fileSizeInKB > maxSizeInKB) {
        setError("File must not be larger than 10MB.");
        setFile(null);
      } else {
        setError("");
        setFile(selectedFile);
        setProgress(0);

        // Simulate file processing
        let uploadProgress = 0;
        const interval = setInterval(() => {
          uploadProgress += 10;
          setProgress(uploadProgress);
          if (uploadProgress >= 100) {
            clearInterval(interval);
          }
        }, 200);
      }
    }
  }, []);

  const removeFile = () => {
    setFile(null);
    setError("");
    setProgress(0);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
  });

  return (
    <div className="w-full py-4 bg-gray-50 rounded-2xl border border-gray-300 gap-3 grid border-dashed cursor-pointer">
      {!file && (
        <div {...getRootProps()} className="grid gap-1">
          <input {...getInputProps()} />
          <h2 className="text-center text-gray-400 text-xs leading-4">
            PDFs, smaller than 10MB each. Ensure the ticker name is in the file name.
          </h2>
          <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">
            Drag and Drop your file here or Click to Browse
          </h4>
        </div>
      )}

      {file && (
        <div className="flex justify-center items-center">
          <UploadedFile file={file} removeFile={removeFile} progress={progress} />
        </div>
      )}
      {error && <p className="text-center text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default FileUpload;
