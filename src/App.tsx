import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { useAppSelector } from "./store/hooks.store";

export function App(): JSX.Element {
  const userName = useAppSelector((state) => state.home.userName);
  const title = useAppSelector((state) => state.home.title);

  return (
    <div className="flex flex-col justify-start p-4 items-center border border-solid border-yellow-600 rounded">
      <h1 className="text-3xl font-medium">App.tsx</h1>
      <h2 className="text-2xl font-bold my-4">{title}</h2>
      <p className="my-1">Guest: {userName}</p>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
