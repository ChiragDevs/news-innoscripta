import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
} from "react-router";
import App from "./App.jsx";
import NewsArticles from "./pages/articles/index.jsx";
import NewsFeed from "./pages/feed/index.jsx";
import { store } from "./services/redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <StrictMode>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<NewsArticles />} />
            <Route path="feed" element={<NewsFeed />} />
          </Route>
        </Routes>
      </StrictMode>
    </Router>
  </Provider>
);
