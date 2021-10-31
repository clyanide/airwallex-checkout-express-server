# Airwallex Checkout Sample Express Server 
Dedicated API for ShoesForYou's sample ecommerce checkout.

## Technologies
- NodeJS
- ExpressJS
- CORS

## Getting Started

### Prerequisites
- NodeJS
- NPM

1. Clone this repo and navigate to the root directory
2. (Optional) Create a `.env` file in the root directory of the project to specify the local port number you want the server to run on (default port number is 4000)
2. `npm install` to install all the required dependencies
3. `npm start` to start the local server

## Project Structure
- `app.js` - The entry point to our application
- `routes/` - Contains routing endpoints of our API
- `controllers/` - Contains definitions for our routes
- `utilities/` - Contains tools used by our API

## Endpoints
| HTTP | Endpoint          | Headers                    | Body | Returns | Description                                                                                         |
|------|-------------------|----------------------------|------|---------|-----------------------------------------------------------------------------------------------------|
| POST | /airwallex/auth   | client-id api-key          | N/A  | JSON    | Authorises a Airwallex account using client ID and API key. Returns a bearer token.                 |
| POST | /airwallex/intent | Content-Type Authorization | JSON | JSON    | Creates a Airwallex payment intent. Authorized using bearer token. Returns a payment intent object. |

## Changes For Production
- Set NODE_ENV to `production`
- Add production logging
- Set up [response compression](http://expressjs.com/en/resources/middleware/compression.html)
- Protect against well-known vulnerabilities (e.g. [Helmet](https://www.npmjs.com/package/helmet))
- Secure the API (e.g. using Auth0 with [Passport.js](http://www.passportjs.org/))
- Get Airwallex API key and Client ID from environment variables instead of client requests
