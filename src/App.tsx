import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Home, Profile, Ed } from "./pages/index";
import MainLayout from "./layouts/MainLayout";

// import("../src/utils/math").then((math) => {
//   console.log(math.add(11223344, 556677));
// });

// add(123, 321);

function App() {
  const Home = React.lazy(
    () => import(/* webpackChunkName: "Home" */ "./pages/Home")
  );

  const Cart = React.lazy(
    () => import(/* webpackChunkName: "Cart" */ "./pages/Cart")
  );

  const ItemPage = React.lazy(
    () => import(/* webpackChunkName: "ItemPage" */ "./pages/ItemPage")
  );

  const NotFound = React.lazy(
    () => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound")
  );

  const Profile = React.lazy(
    () => import(/* webpackChunkName: "Profile" */ "./pages/Profile")
  );

  const Ed = React.lazy(
    () => import(/* webpackChunkName: "Ed" */ "./pages/Ed")
  );

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          path=""
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Home />
            </React.Suspense>
          }
        />

        <Route
          path="item/:id"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <ItemPage />
            </React.Suspense>
          }
        />

        <Route
          path="cart"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </React.Suspense>
          }
        />

        <Route
          path="acc"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Profile />
            </React.Suspense>
          }
        />
        <Route
          path="ed"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Ed />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
