# Bus Tracking System

A comprehensive bus tracking system built with React, Node.js, Express, and MongoDB. This application allows real-time tracking of campus buses for students, faculty, drivers, and administrators.

## Features

- Real-time bus location tracking with interactive maps
- Role-based access for students, faculty, drivers, and administrators
- Bus route visualization and schedule information
- Seat vacancy tracking system
- Live notifications and driver status updates
- Administrative dashboard for route management
- Mobile-responsive design for on-the-go access

## Tech Stack

### Frontend
- React (with Hooks and Context API)
- React Router for navigation
- Leaflet for interactive maps
- Tailwind CSS for styling
- Lucide React for icons
- Socket.io client for real-time updates

### Backend
- Node.js and Express
- MongoDB with Mongoose ODM
- JWT for authentication
- Socket.io for real-time communication

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev:all
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

## User Roles

- **Student**: Can check bus routes, timings, and vacancies
- **Faculty**: Same as students, but with separate buses
- **Driver**: Can notify students/faculty and share bus location
- **Admin**: Manages buses, routes, and user issues

## Project Structure

- `/src`: Frontend React application
- `/server`: Backend Express application
- `/server/models`: MongoDB models
- `/server/routes`: API routes
- `/server/middleware`: Express middleware

## License

This project is licensed under the MIT License.