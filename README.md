# URL Shortener with Authentication

This project is a basic URL shortener application built with Node.js, Express, and MongoDB, featuring user authentication to manage shortened URLs securely.

## Live Demo

You can access the live application here: [URL Shortener with Authentication](https://u-49fa.onrender.com)

## Features

- **User Authentication**: Secure user registration and login functionality to manage personal URLs.
- **URL Shortening**: Convert long URLs into concise, shareable links.
- **User Dashboard**: Authenticated users can view and manage their shortened URLs.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/alintm4/url_shortener_with_authentication.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd url_shortener_with_authentication
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Configure Environment Variables**:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   MONGO_URL=your_mongodb_connection_string
   ```

   Replace `your_mongodb_connection_string` with your MongoDB connection string.
## Usage

1. **Start the Application**:

   ```bash
   npm start
   ```

2. **Access the Application**:
   
   Open your browser and navigate to `http://localhost:8001`.

## Folder Structure

```plaintext
url_shortener_with_authentication/
├── controllers/    # Route handlers
├── middleware/     # Custom middleware functions
├── models/         # Mongoose schemas
├── routes/         # Application routes
├── services/       # Business logic
├── views/          # EJS templates
├── connectiondb.js # Database connection setup
├── index.js        # Entry point of the application
├── package.json    # Project metadata and dependencies
└── .gitignore      # Files and directories to ignore in Git
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License


This project is licensed under the MIT License. You can view or download the full license from the [LICENSE file](license.txt).
