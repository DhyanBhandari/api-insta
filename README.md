# Instagram Profile Viewer

This project is a React application that allows users to view their Instagram profile details and posts. It uses the Instagram Basic Display API to authenticate users and fetch their profile information and posts.

## Features

- Login using an Instagram account and obtain an access token using the Instagram Basic Display API.
- Fetch and display the following user details:
  - Name
  - Username
  - Number of followers
  - Number of following
- Fetch and display user posts with the following attributes:
  - Image(s)
  - Caption
  - Like count
- Display user posts in a vertical scrolling manner.

## Prerequisites

To run this application, you'll need the following:

- Node.js (v12 or higher)
- A valid Instagram account with an associated Facebook Developer account.
- Instagram Basic Display API credentials (client ID, client secret, and redirect URI).
- Server-side infrastructure to handle API requests and implement the required API endpoints.

## Installation

1. Clone the repository:


2. Install the dependencies:

cd instagram-profile-viewer
npm install


3. Update the React component:

- Open `App.js` in a text editor.
- Replace the hard-coded access token in the `fetch` request inside the `useEffect` hook with the actual endpoint URL that handles user authentication and returns the access token.
- Modify the code to fit your server-side implementation, including the API endpoint URLs and request/response formats.

4. Start the application:

npm start

This will start the development server and the application will be accessible at http://localhost:3000.

## Usage

- Open the application in a web browser.
- Click the "Login with Instagram" button to authenticate using your Instagram account.
- Upon successful authentication, the user details (name, username, followers count, and following count) and the user's posts will be displayed.
- The posts will be shown in a vertical scrolling manner, with each post showing the image, caption, like count, and the user's followers and following counts.

## API Endpoints

This application requires the following API endpoints to be implemented on the server side:

- `/api/login` (POST): Authenticates the user using their Instagram account credentials and returns the access token.
- `/api/user-details` (POST): Fetches the user's profile details using the access token.
- `/api/user-posts` (POST): Fetches the user's posts using the access token.

Make sure to secure these endpoints and handle errors appropriately.

## License

This project is licensed under the [MIT License](LICENSE).
