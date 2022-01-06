import { useEffect } from "react";
import { StrictMode } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
import { fetchUser } from "./utils/fetchUser";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();

    if (!user) navigate("/login");
  }, []);

  return (
    <StrictMode>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </StrictMode>
  );
}

export default App;
