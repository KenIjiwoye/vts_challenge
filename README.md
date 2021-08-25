# VisionTechSolutions React Demo

Some assumptions during the development of this project:

Public route:
-login

Protected Routes:
-lookup
-results
-update profile

Q: Should the results from the lookup screen stay within the same screen? Or be displayed on a separate screen?
-Currently I have them showing on the same screen

Number #3. The event to disable the first route... Should this be invoked by a user? Or should this be done programatically during navigating between screens?
-Currently I have this done upon navigating to another route.

### Walkthrough

    1. Use any combo of username, email, password to log into app
    2. Search for location on the map and it will show an auto suggestion dropdown
    3. choose an address and the it will show on the center of map and pull up current weather forecast for that area (WeatherBit API)
    4. Navigate to Profile page and you will notice that the first route is no longer accessible.

    5. Update the user details on this page and component will refresh instantly to show new data. (localStorage)
    6. Logout button will redirect you to the login screen.

Enjoy!! :)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
