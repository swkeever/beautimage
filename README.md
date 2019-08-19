# Beautimage

Check out the project [here](https://swkeever.github.io/beautimage).

## Introduction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Visit [their documentation](https://create-react-app.dev/docs/available-scripts) for more information on the scripts made available by Create React App.

## Setup

### API

You will need to visit [Unsplash Developers](https://unsplash.com/developers) and create a free app in order to get an API access key and secret. Once you have the API keys, put them in a file named `.env` in the project root directory as shown below. This needs to be done since `.env` is ignored by git.

```
REACT_APP_ACCESS_KEY=<access_key>
REACT_APP_SECRET_KEY=<secret_key>
```

## Important

Because I'm doing this project just for fun, I'm using the Unsplash API in demo mode and [rate limiting](https://unsplash.com/documentation#rate-limiting) is enforced.

 Therefore if you do too many searches using the app, you may get an error saying you received a [403 forbidden status code](https://en.wikipedia.org/wiki/HTTP_403). This means that you exceeded the rate limit.

## Licence

MIT