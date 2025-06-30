const NEWS_API_URL = "https://newsapi.org/v2/";
const News_Api_Key = import.meta.env.VITE_API_KEY01;

export const getNewsApi = async () => {
  const maxDate = new Date().toISOString().slice(0, 10);
  const minDateTemp = new Date();
  minDateTemp.setFullYear(minDateTemp.getFullYear() - 1);
  const minDate = minDateTemp.toISOString().slice(0, 10);
  const response = await fetch(
    `${NEWS_API_URL}everything?q="a"&sortBy=pusblishedAt`,
    {
      headers: {
        "X-API-Key": News_Api_Key,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error getting Data");
  }
  const data = await response.json();
  // console.log(data.articles);

  return data.articles;
};

export const getSearchedNews = async (keyword) => {
  const response = await fetch(`${NEWS_API_URL}everything?q=${keyword}`, {
    headers: {
      "X-API-Key": News_Api_Key,
    },
  });

  if (!response.ok) {
    throw new Error("Error getting Data");
  }
  const data = await response.json();
  // console.log(data.articles);
  return data.articles;
};

export const getPrefferedNews = async (categories, sources) => {
  const response = await fetch(
    `${NEWS_API_URL}/top-headlines?${
      categories.length > 0 ? `category=${categories.toSring()}` : ""
    }${sources.length > 0 ? `&sources=${sources.toString()}` : ""}`,
    {
      headers: {
        "X-API-Key": News_Api_Key,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error getting Data");
  }
  const data = await response.json();
  // console.log(`Preferred articles : ${data.articles}`);
  return data.articles;
};
