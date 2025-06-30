import { Outlet } from "react-router";
import Header from "./components/header/header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllNews } from "./services/redux/redux-thunk";
import "./App.css";

function App() {
  const data = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllNews());
  }, [dispatch]);

  return (
    <div className="main-container">
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
