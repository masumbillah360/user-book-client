import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  console.log(url);
  // console.log(URL.createObjectURL(url));
  return (
    <div className="App">
      <input
        accept="image/*"
        onChange={(e) => setUrl(URL.createObjectURL(e.target.files[0]))}
        type="file"
        name="image"
      />

      <img
        style={{ height: "200px", width: "300px" }}
        src={url}
        alt="not found"
      />
    </div>
  );
}

export default App;
