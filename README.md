# GiphySearch
A demo giphy search application to learn the 2019 version of React.

## Features
- Application state is kept in the URL
- Loading indicator while waiting for the API response
- Images have a placeholder while loading and a fast animation when done loading
- Different video format support with fallbacks: WEBP -> MP4 -> GIF
- Different video format size based on screen size.
- No results found message
- Error message when the API is down
- Subsequent API calls are cancelled
- Navigating away will cancel the current API call
- Pagination
- A settings page to change the Giphy content rating

[See the todo document](./todo.md) for missing features.

## Available scripts
- `npm install`
- `npm run start`
- `npm run build`
- `npm run test`
- `npm run lint`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
