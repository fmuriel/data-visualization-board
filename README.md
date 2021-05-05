# KpopDiscs Supplier Store - Package Visualization Board

The stores consulting this board would like to see where their packages are in the world. They will be able to:

- Filter a specific list of packages according to the client.
- Request all packages.

Once the packages are loaded into the board, they will be able to:

- Filter by Courier
- Filter by Status
- Order the requests by ascending Estimated Departure or Estimated Arrival
- Filter and order at the same time, combining the options above

If the web app were to lose connectivity, the user will be able to filter and see the initial status for the last request he made (by client or all packages)

## Decisions

This app was developed just using React.js and Styled Components:

- Since this was a simple dashboard with a few components, I tried to avoid overloading the application with tools such as Context API or Redux.
- I chose Styled Components in order to take advantage of the props utility, and I tried to make styles as reusable as possible (as seen at reusableStyles.js).
- I tried to code components as custom and native as possible, avoidying known shortcuts such as MaterialUI.
- The main component, TableData.js: I'm aware that MaterialUI's Table is very easy to implement and has many filtering functions incorporated. I purposely avoided using such component and tools in order to display the use of React's hooks and functional components mixed with native Javascript filters.

## Challenges and To Do

- Testing using Jest.
- I would have liked to include a counter for the different packages' statuses.
- Support to insert more packages into the list.
- I would've liked to implement TypeScript.

### Initial setup

Run `npm install` at the project directory to install all necessary dependencies.

### Environment Variables

Before launching the app:

1. Please copy the .env.example file located at the root folder, and rename it to .env.local
2. Request the env.local values which I have privately stored, and place them at the .env.local file.

### Starting the app

Run `npm start` and open your browser at [http://localhost:3000](http://localhost:3000) to start navigating.

---

Made by [Florencia Vilchez](https://www.linkedin.com/in/florencia-vilchez/) with 💜
