import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { getNewsApi, getPrefferedNews, getSearchedNews } from "../api";

const formatArticle = (article) => ({
  ...article,
  id: nanoid(),
  title: article.title || "News Title",
  description: article.description || "News Description",
  url: article.url || "www.google.com",
  source: article.source || { name: "Unknown" },
  publishedAt: article.publishedAt || "",
  category: article.category || "General",
  author: article.author || "Unknown",
});

// fetch news
export const fetchAllNews = createAsyncThunk(
  "news/fetchAllNews",
  async (_, thunkAPI) => {
    try {
      const newsApiData = await getNewsApi();

      return newsApiData.map(formatArticle);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Fetch Search
export const searchNews = createAsyncThunk(
  "news/searchNews",
  async (keyword, thunkAPI) => {
    try {
      const result = await getSearchedNews(keyword);
      return result.map(formatArticle);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Fetch Preferred
export const fetchPrefferedNews = createAsyncThunk(
  "news/fetchPrefferedNews",
  async (preferences, thunkAPI) => {
    const { categories, sources, authors } = preferences;
    try {
      const data = await getPrefferedNews(categories, sources);

      const filteredData = authors?.length
        ? data.filter((n) => authors.includes(n.author))
        : data;
      return filteredDataData;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
