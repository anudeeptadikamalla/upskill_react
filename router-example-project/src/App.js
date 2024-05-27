import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Product from "./pages/Product.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <Product />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
