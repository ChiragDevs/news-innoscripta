## News Article

## Requirements

- [ ] Use 3 News APIs to aggregate News Data.
- [x] Article search and filtering: Users should be able to search for articles by keyword and filter the results by date, category, and source.
- [ ] Personalized news feed: Users should be able to customize their news feed by selecting their preferred sources, categories, and authors.
- [x] Mobile-responsive design: The website should be optimized for viewing on mobile devices.

## Routing

- React Router
- [Declarative Mode](https://reactrouter.com/start/declarative/installation)
- 2 Pages - News Articles & News Feed

## Styling

- Used : CSS Modules

## App State

- Redux Toolkit
- Redux Thunk - API fetching

## Docker image

- runs on port 5173
- Build Image : docker build -t react-app:dev
- Run Image : docker run -p 5173:3000 react-app:dev

## Future Planned Changes

- Feat : Add modal to display news details and add link to page there
- ReFact : From 1 API update to 3 API aggregate
- ReFact : Clean code to standardise across 3API datas (add props where required)
- ReFact : ReDesign (Tailwind, MUI)
- Implement Typescript
- Feat : Add search transition for mobile screen button to searchbox
