import { createBrowserRouter } from "react-router-dom";
import { homeRoutes } from "./Home.routes.ts";
import { aboutRoutes } from "./About.routes.ts";

export const router = createBrowserRouter([homeRoutes, aboutRoutes]);
