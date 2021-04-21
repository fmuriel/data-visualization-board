# Freight Forwarder Engagement Solution | Logixboard Challenge

The freight forwarder consulting this board would like to see where shipments are in the world. They will be able to:

- Filter a specific list of shipments according to the client
- Request all shipments

Once the shipments are loaded into the board, they will be able to:
- Filter the shipments by Mode
- Filter the shipments by Status
- Order the requests by ascending Estimated Departure or Estimated Arrival
- Filter and order at the same time, combining the options above

If the web app were to lose connectivity, the freight forwarder will be able to filter and see the initial status for the last shipments request he made (by client or all shipments)

## Decisions
This app was developed just using React.js and Styled Components:

- Since this was a simple dashboard with a few components, I tried to avoid overloading the application with tools such as Context API or Redux.
- I chose Styled Components in order to take advantage of the props utility, and I tried to make styles as reusable as possible (as seen at reusableStyles.js).
- I tried to code components as custom and native as possible, avoidying known shortcuts such as MaterialUI.
- The main component, TableData.js: I'm aware that MaterialUI's Table is very easy to implement and has many filtering functions incorporated. I purposely avoided using such component and tools in order to display the use of React's hooks and functional components mixed with native Javascript filters.

## Challenges and To Do
- I believe one the most important priorities was not to mess with the data, which was inconsistent in columns such as Origin an Destination. If possible, I would have preferred to normalize the data for this two sets of information, which would've allowed me to create two extra filters and include them in the current Filter component.
- If the normalization would've been possible, I woudl've liked to change from table rows to dropdows, and by clicking on them, displaying the Route Details section as a map connecting the Origin and Destination and Transit time for the Active Shipments.
- I would have liked to include a counter for the different shipment' statuses.
- Support to insert more shipments into the list: the form and the post function where created, but I kept getting a Network Error that I didn't have enough time to finish debugging.
- I would've liked to implement at least PropTypes, and with more time, Typescript.

### Initial setup

Run `npm install` at the project directory to install all necessary dependencies.

### Environment Variables
Before launching the app:
1) Please copy the .env.example file located at the root folder, and rename it to .env.local
2) Replace the values with the ones I've sent over e-mail.

### Starting the app

Run `npm start` and open your browser at [http://localhost:3000](http://localhost:3000) to start navigating.

---

Made by [Florencia Vilchez](https://www.linkedin.com/in/florencia-vilchez/) with 💛
