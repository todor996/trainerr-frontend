import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export function App(): JSX.Element {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
