import {
  RouterProvider,
  // createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Product from "./pages/Product.js";
import RootLayout from "./pages/Root.js";
import Error from "./pages/Error.js";
import ProductDetails from "./pages/ProductDetails.js";

// const routedef = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />,
//     <Route path="/products" element={<Product />} />
//   </Route>
// );

// const router = createBrowserRouter(routedef);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "products/:productId",
        element: <ProductDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
