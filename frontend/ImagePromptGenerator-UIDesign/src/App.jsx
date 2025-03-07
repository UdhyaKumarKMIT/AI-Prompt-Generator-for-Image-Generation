import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "flowbite-react";

function App() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [error, setError] = useState("");
  const [generatedImage, setGeneratedImage] = useState(null); // State for generated image

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setError(""); // Clear errors if any
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/png, image/jpeg, image/webp",
    maxSize: 4 * 1024 * 1024, // 4MB limit
    onDrop,
    onDropRejected: () => setError("File must be PNG, JPG, or WEBP and under 4MB."),
  });

  const generateCaption = async () => {
    if (!file) {
      setError("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/generate_prompt", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setCaption(data.caption);
        setError("");
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect to server.");
    }
  };

  const generateImage = async () => {
    caption = "cat on astronaut suit "
    if (!caption) {
      setError("Please enter a prompt.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/generate_image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: caption }),
      });

      const data = await response.json();

      if (response.ok) {
        setGeneratedImage(data.image_url); // Store the generated image URL
        setError("");
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect to server.");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="container text-center mt-4">
        <h1 className="mb-4">Welcome to My React App</h1>
        <h2 className="text-primary">Image Captioning</h2>

        <div className="row mt-4 border p-4 rounded shadow bg-light">
          {/* Left Side: Image Upload */}
          <div className="col-md-6 d-flex flex-column align-items-center border-end">
            <div
              {...getRootProps()}
              className="border border-secondary rounded p-4 text-center w-100 bg-white cursor-pointer"
              style={{ cursor: "pointer" }}
            >
              <input {...getInputProps()} />
              <img
                src="https://img.icons8.com/ios/50/000000/image.png"
                alt="Upload Icon"
                className="mb-2"
              />
              <p className="text-muted">Upload a photo or drag and drop</p>
              <p className="text-secondary">PNG, JPG, or WEBP up to 4MB</p>
            </div>

            {file && (
              <img
                src={URL.createObjectURL(file)}
                alt="Uploaded"
                className="img-fluid mt-3 rounded"
                style={{ maxWidth: "100%", maxHeight: "250px" }}
              />
            )}
          </div>

          {/* Right Side: Generated Caption */}
          <div className="col-md-6 d-flex flex-column align-items-center">
            <textarea
              className="form-control mt-2"
              rows="6"
              value={caption}
              placeholder="Generated caption will appear here..."
            ></textarea>
            <button className="btn btn-primary mt-3" onClick={generateCaption}>
              Generate Caption
            </button>
            <button className="btn btn-primary mt-3" onClick={generateImage}>
              Generate Image
            </button>
            {error && <p className="text-danger mt-2">{error}</p>}
          </div>
        </div>
      </div>

    
      <div className="row mt-4 border p-4 rounded shadow bg-light genImage" style={{width: "450px",height:"400px"}}>
        {generatedImage && (
          <img
            src={generatedImage}
            alt="Generated"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "450px", maxHeight: "400px" }}
          />
        )}
      </div>

      <footer className="text-center mt-4 p-3 bg-light">
        <p>&copy; 2025 My React App</p>
      </footer>
    </div>
  );
}

export default App;
