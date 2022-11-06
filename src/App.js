import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";

function App() {
  return (
    <RouterProvider router={router} />
    // <div className="App">
    //   <input
    //     accept="image/*"
    //     onChange={(e) => setUrl(URL.createObjectURL(e.target.files[0]))}
    //     type="file"
    //     name="image"
    //   />

    //   <img
    //     style={{ height: "200px", width: "300px" }}
    //     src={url}
    //     alt="not found"
    //   />
    // </div>
  );
}

export default App;
