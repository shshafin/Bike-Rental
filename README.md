<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bike Rental Reservation System</title>
</head>
<body>
    <h1>Bike Rental Reservation System</h1>

    <p><strong>Project Name:</strong> Bike Rental Reservation System</p>
    <p><strong>Created by:</strong> Shafin</p>
    <p><strong>Contact:</strong> <a href="mailto:shafinsadnan08@gmail.com">shafinsadnan08@gmail.com</a></p>

    <h2>Introduction</h2>
    <p>
        The Bike Rental Reservation System allows users to view available bikes, register, and reserve bikes for rental. 
        Admins can manage the bikes, including adding, updating, and deleting bike listings. 
        The system also calculates rental costs based on the duration of the rental.
    </p>

    <h2>Features</h2>
    <ul>
        <li>Admin Management: Create, update, and delete bike listings.</li>
        <li>User Interaction: View bikes, update user profile (name and phone), and create rentals.</li>
        <li>Rental Calculation: Calculates rental fee based on the time between bike rental and return.</li>
        <li>JWT Authentication: Secure authentication for both admin and user roles.</li>
    </ul>

    <h2>Tech Stack</h2>
    <table>
        <tr>
            <th>Programming Language</th>
            <td>TypeScript</td>
        </tr>
        <tr>
            <th>Web Framework</th>
            <td>Express.js</td>
        </tr>
        <tr>
            <th>ODM & Validation Library</th>
            <td>Zod, Mongoose for MongoDB</td>
        </tr>
    </table>

    <h2>Setup & Installation</h2>
    <ol>
        <li>Clone this repository to your local machine:</li>
        <pre><code>git clone https://github.com/yourusername/bike-rental-system.git</code></pre>
        <li>Navigate to the project directory:</li>
        <pre><code>cd bike-rental-system</code></pre>
        <li>Install the required dependencies:</li>
        <pre><code>npm install</code></pre>
        <li>Create a `.env` file in the root directory with the following environment variables:</li>
        <pre><code>
NODE_ENV=development
PORT=2829
DB_URL=mongodb+srv://shafin07:shafinswarna07@cluster0.wmvi8.mongodb.net/bike-rental?retryWrites=true&w=majority&appName=Cluster0
BCRYPT_SALT_ROUNDS=7
JWT_ACCESS_SECRET=secret
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_SECRET=refreshsecret
JWT_REFRESH_EXPIRES_IN=7d
        </code></pre>
        <li>Run the project locally:</li>
        <pre><code>npm start</code></pre>
        <li>The app will run at <code>http://localhost:2829</code>.</li>
    </ol>

    <h2>API Endpoints</h2>
    <h3>User Endpoints</h3>
    <ul>
        <li><strong>POST /auth/register</strong> - Register a new user.</li>
        <li><strong>POST /auth/login</strong> - Login a user and receive a JWT token.</li>
        <li><strong>GET /user/profile</strong> - View the user's profile.</li>
        <li><strong>PUT /user/profile</strong> - Update the user's name and phone number.</li>
        <li><strong>POST /rental/create</strong> - Create a new rental for the user.</li>
        <li><strong>GET /rental</strong> - Get all rentals of the user.</li>
        <li><strong>PUT /rental/return</strong> - Return a bike rental and calculate the cost.</li>
    </ul>

    <h3>Admin Endpoints</h3>
    <ul>
        <li><strong>POST /admin/bike</strong> - Admin creates a new bike listing.</li>
        <li><strong>PUT /admin/bike/:id</strong> - Admin updates an existing bike.</li>
        <li><strong>DELETE /admin/bike/:id</strong> - Admin deletes a bike listing.</li>
    </ul>

    <h2>Authentication</h2>
    <p>
        The application uses JWT (JSON Web Tokens) for user authentication. 
        Upon login, a JWT access token is issued which must be included in the Authorization header of subsequent requests.
    </p>
    <p><strong>Access Token Expiration:</strong> 1 day</p>
    <p><strong>Refresh Token Expiration:</strong> 7 days</p>

    <h2>Model Structure</h2>
    <h3>User Model</h3>
    <ul>
        <li>Username</li>
        <li>Email</li>
        <li>Password (hashed)</li>
        <li>Phone</li>
        <li>Role (admin/user)</li>
    </ul>

    <h3>Bike Model</h3>
    <ul>
        <li>Bike Name</li>
        <li>Description</li>
        <li>Price per Hour</li>
        <li>Availability</li>
    </ul>

    <h3>Rental Model</h3>
    <ul>
        <li>User ID</li>
        <li>Bike ID</li>
        <li>Start Date</li>
        <li>End Date (when returned)</li>
        <li>Total Rental Cost</li>
    </ul>

    <h2>Environment Variables</h2>
    <table>
        <tr>
            <th>Variable</th>
            <th>Description</th>
        </tr>
        <tr>
            <td><code>NODE_ENV</code></td>
            <td>Set to 'development' or 'production' based on the environment.</td>
        </tr>
        <tr>
            <td><code>PORT</code></td>
            <td>The port on which the server will run (default is 2829).</td>
        </tr>
        <tr>
            <td><code>DB_URL</code></td>
            <td>MongoDB connection string for the bike rental database.</td>
        </tr>
        <tr>
            <td><code>BCRYPT_SALT_ROUNDS</code></td>
            <td>Number of salt rounds for bcrypt password hashing.</td>
        </tr>
        <tr>
            <td><code>JWT_ACCESS_SECRET</code></td>
            <td>Secret key for signing access tokens.</td>
        </tr>
        <tr>
            <td><code>JWT_ACCESS_EXPIRES_IN</code></td>
            <td>Expiration time for the access token.</td>
        </tr>
        <tr>
            <td><code>JWT_REFRESH_SECRET</code></td>
            <td>Secret key for signing refresh tokens.</td>
        </tr>
        <tr>
            <td><code>JWT_REFRESH_EXPIRES_IN</code></td>
            <td>Expiration time for the refresh token.</td>
        </tr>
    </table>

    <h2>Contributing</h2>
    <p>If you would like to contribute to this project, feel free to fork the repository and submit a pull request.</p>

    <h2>License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>
</html>
