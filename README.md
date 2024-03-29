# OpenTable Clone

This repository contains a clone of the OpenTable service, enabling users to search for restaurants and make reservations.


## Features

- **Restaurant Search:** Users can search for restaurants based on location, cuisine, and price range.

- **Restaurant Listings:** View a list of restaurants matching search criteria, including details like name, location, cuisine, and average rating.

- **Restaurant Details:** Access detailed information on selected restaurants, including photos, menu, reviews, and available reservation times.

- **Reservation Booking:** Book a reservation by selecting date, time, and number of guests. Users can add special requests or preferences during the booking process.

- **User Authentication:** Create an account, log in, and manage reservations. Authenticated users can view reservation history, modify or cancel bookings, and save favorite restaurants.

- **Reviews and Ratings:** Authenticated users can leave reviews and ratings for visited restaurants. They can also view and filter reviews left by other users.

- **Responsive Design:** The application is designed to be mobile-friendly, providing a seamless experience across different devices and screen sizes.

## Technologies Used

- **Front-end:** React, [Next.js](https://nextjs.org), typeScript, [Material UI](https://mui.com/material-ui/)
- **Back-end:** [Node.js](https://nodejs.org), Express.js
- **Database:** PostgreSQL (with [Supabase](https://supabase.com) as a database provider)
- **Authentication:** JSON Web Tokens (JWT)
- **Third-Party APIs/Packages:** [Axios](https://www.npmjs.com/package/axios), [Prisma](https://www.prisma.io), [cookies-next](https://www.npmjs.com/package/cookies-next), [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken), [validator](https://www.npmjs.com/package/validator), [Postman API Desktop](https://www.postman.com/downloads/postman-agent/) (for testing)
- **Deployment:** [Vercel](https://vercel.com)

## Getting Started

To start with the OpenTable clone, follow these steps:

1. Clone the repository: `https://github.com/0x6Star3s/clon-open-table.git`

2. Install dependencies: run `npm install` or `yarn install`

3. Set up environment variables: Rename `.env.example` to `.env` and update values such as API keys, database connection strings, etc.

4. Start the development server: Run `npm run dev` or `yarn dev` to start the server.

5. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! To contribute, follow these steps:

1. Fork the repository and create a new branch for your feature or bug fix.

2. Make changes and test thoroughly.

3. Commit changes with a descriptive message.

4. Push changes to your forked repository.

5. Submit a pull request to the main repository, explaining your changes and the problem it solves.

6. Wait for feedback and iterate on changes if necessary.

