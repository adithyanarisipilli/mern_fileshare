import { useState, useEffect, useRef } from "react";
import "./App.css";
import { uploadFile } from "./services/api.js";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  console.log(file);

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);
  const fileInputRef = useRef();

  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div
      className="main-wrapper"
      style={{
        backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/531/951/621/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-preview.jpg')`,
      }}
    >
      <div className="container">
        <div className="wrapper">
          <h1>ADIFS file sharing App!</h1>
          <p>Upload and share the download link with your mates.</p>

          <button onClick={() => onUploadClick()}>Upload</button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <a href={result}>{result}</a>
        </div>
      </div>
    </div>
  );
}

export default App;
