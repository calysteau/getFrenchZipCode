# French Zip Code Node.js Application

This application serves as a simple API to fetch French zip codes based on the distance from a given point.

## Prerequisites

- Node.js
- MySQL
- A server with Phusion Passenger (optional)

## Installation

1. Clone this repository:
```
git clone <repository-url>
```

2. Navigate to the project directory:
```
cd <repository-directory-name>
```

3. Install the required packages:
```
npm install
```

## Configuration

Before running the application, make sure to configure your MySQL database connection. Update the following placeholders in the code with your actual database credentials:
- `<your host>`
- `<your user>`
- `<your password>`
- `<your database>`

## Running the Application

If you're using Phusion Passenger, the application will automatically configure itself. Otherwise, the application will run on port 3000 by default.

To start the application:
```
npm start
```

Once running, you can access the API at:
```
http://localhost:3000/getFrenchZipCode?x=<longitude>&y=<latitude>&d=<distance>
```

Replace `<longitude>`, `<latitude>`, and `<distance>` with the desired values.

## API Usage

To fetch French zip codes based on the distance from a given point, make a GET request to `/getFrenchZipCode` with the following query parameters:
- `x`: Longitude
- `y`: Latitude
- `d`: Distance (in meters)

Example:
```
http://localhost:3000/getFrenchZipCode?x=2.3522&y=48.8566&d=10000
```

The above example fetches zip codes within 10 kilometers of central Paris.

---

I hope this helps! If you have any further questions or need modifications, please let me know.
