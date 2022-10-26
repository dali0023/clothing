import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./routes/home/Home.component.jsx";
import Navigation from "./routes/navigation/Navigation.component.jsx";

function Shop() {
  return <h1>I am from Shop Page!</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
