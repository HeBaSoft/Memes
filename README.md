# Memes
Frontend for subreddit scraper intended to ease browsing the hottest Reddit memes.

## Backend
Is a REST API with two GET endpoints `/memes` and `/memes/sources`.
Currently, the backend part of this project is not publicly available. This might change in the future.

### Changing API address
Backend URL address can be changed in axios integration file.


> src/app/integration/axios.js

```
axios.defaults.baseURL = 'http://yourapi.net/';
```

### Endpoint GET /memes
Provides website content as an array of 'posts'.
Expects `filters` parameter query with subreddits specified by sources endpoint separated by commas.
The filters parameter a white-list used to specify what subreddits should be included in the response.


> http://yourapi.net/memes?filters=dankmemes,grimdank

```
[
  {
    "name": [string],
    "link": [string, url],
    "image": [string, url],
    "created": [numeric, utc-unix-timestamp],
    "score": [numeric],
    "source": {
      "id": [string],
      "icon": [string, url],
      "url": [string, url]
    }
  },
  {
      ...
  },
  ...
]
```

### Endpoint GET /memes/sources
Provides a list of subreddits user can filter by.

> http://yourapi.net/memes/sources

```
[
  "memes",
  "dankmemes",
  "wholesomememes",
  ...
]
```

## Setting up locally
Guide how to set up development environment on your local machine.

- Clone the repository locally. Navigation to Git folder just an example, use your workspace folder instead. This creates a directory named "HeBaSoft" with sub-folder 'Memes' and clones the repository. If you don't have Git installed on your machine, you can download the repository archive instead.

		cd ~/Git
		git clone https://github.com/HeBaSoft/Memes.git HeBaSoft/Memes

- This expect you to have NodeJS installed on your machine alongside a package manager like npm or yarn. Skip this step if you already have it.

 Download installer for your platform of choice [here](https://nodejs.org/en/download/current/)

- Install project packages.

		npm install

- Start local development server

		npm run dev

## Building from source
Guide how to build the project from source.

- Open terminal in project root and run build command.

		npm run build

## Deployment
Guide how to build and deploy the project to website hosting service via FTP.

- Build script expects some environment variables are used to configure FTP upload. Create .env file in project root and define following variables.

		FTP_USERNAME=user
		FTP_PASSWORD=password
		FTP_HOST=ftp.yourwebsite.net
		FTP_DEPLOY_DIRECTORY=/www

- Open terminal in project root and run deploy command.

		npm run deploy