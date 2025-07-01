import { createSlice } from "@reduxjs/toolkit";
import { fetchAllNews, fetchPrefferedNews, searchNews } from "./redux-thunk";

const initialState = {
  news: [],
  searchORFiltered: [],
  authors: [],
  sources: [],
  categories: [],
  filters: {
    date: "",
    source: "",
    category: "",
    searchTerm: "",
  },
  status: "idle", //Future Use : 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  preferedFeed: [],
  preferences: {
    category: "",
    sources: [],
    authors: [],
  },
};

const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.searchORFiltered = state.news.filter((n) => {
        const matchDate = state.filters.date
          ? n.publishedAt.slice(0, 10) === state.filters.date
          : true;
        const matchSource = state.filters.source
          ? n.source.name === state.filters.source
          : true;
        const matchCategory = state.filters.category
          ? n.category === state.filters.category
          : true;
        return matchDate && matchSource && matchCategory;
      });
    },
    clearFilters: (state) => {
      state.filters = { ...state.filters, date: "", source: "", category: "" };
      state.searchORFiltered = state.news;
    },
    clearAll: (state) => {
      state.filters = { date: "", source: "", category: "", searchTerm: "" };
      state.searchORFiltered = state.news;
    },
    setPreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNews.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAllNews.fulfilled, (state, action) => {
        state.status = "success";
        state.news = action.payload;
        state.searchORFiltered = action.payload;

        const authorsSet = new Set(
          action.payload.map((n) => n.author).filter(Boolean)
        );

        state.authors = Array.from(authorsSet).sort((a, b) =>
          a.localeCompare(b)
        );

        const sourcesSet = new Set(
          action.payload.map((n) => n.source.name).filter(Boolean)
        );
        state.sources = Array.from(sourcesSet).sort((a, b) =>
          a.localeCompare(b)
        );

        const categorySet = new Set(
          action.payload.map((n) => n.category).filter(Boolean)
        );
        state.categories = Array.from(categorySet).sort((a, b) =>
          a.localeCompare(b)
        );
      })
      .addCase(fetchAllNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Something went wrong";
      })
      //search
      .addCase(searchNews.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(searchNews.fulfilled, (state, action) => {
        state.status = "success";
        state.searchORFiltered = action.payload;
      })
      .addCase(searchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Search failed";
      })
      //preferences
      .addCase(fetchPrefferedNews.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPrefferedNews.fulfilled, (state, action) => {
        state.status = "success";
        state.preferedFeed = action.payload;
      })
      .addCase(fetchPrefferedNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Search failed";
      });
  },
});

export const { setFilters, setPreferences } = newsSlice.actions;

export default newsSlice.reducer;
