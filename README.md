<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bike Rental API</title>
</head>
<body>
    <h1>Bike Rental API</h1>
    <p>Welcome to the <strong>Bike Rental API</strong>, a modern solution for managing bike rentals, users, and administrative tasks. This API allows users to rent bikes, manage their rentals, and provides administrative access to manage the bike fleet.</p>
<br>
    <h2>Features</h2>
    <ul>
        <li><strong>User Management:</strong> Register, update your profile, and manage your account.</li>
        <li><strong>Bike Rentals:</strong> Rent bikes, view available bikes, and return them when done.</li>
        <li><strong>Admin Dashboard:</strong> Manage bike availability, add or remove bikes, and more.</li>
    </ul>
<br>
    <h2>API Endpoints</h2>
<br>
    <h3>Users</h3>
    <ul>
        <li><strong>GET /users/me</strong> - Get the current user's profile details.</li>
        <li><strong>PUT /users/me</strong> - Update the current user's profile information (name, email, phone, etc.).</li>
    </ul>
<br>
    <h3>Rentals</h3>
    <ul>
        <li><strong>GET /rentals</strong> - Get a list of all rentals.</li>
        <li><strong>POST /rentals</strong> - Create a new rental (Rent a bike).</li>
        <li><strong>PUT /rentals/:id/return</strong> - Mark the rental as returned. Specify the rental ID.</li>
    </ul>
<br>
    <h3>Admin Routes</h3>
    <ul>
        <li><strong>GET /admin/bikes</strong> - Get a list of all bikes available for rent.</li>
        <li><strong>POST /admin/bikes</strong> - Add a new bike to the rental fleet.</li>
        <li><strong>PUT /admin/bikes/:id</strong> - Update bike details (e.g., availability, price, etc.).</li>
        <li><strong>DELETE /admin/bikes/:id</strong> - Remove a bike from the fleet.</li>
    </ul>
<br>
    <h3>Home Route</h3>
    <ul>
        <li><strong>GET /</strong> - Get a welcome message or home page details.</li>
    </ul>
<br>
    <h2>Models</h2>
<br>
    <h3>User Model</h3>
    <table>
        <tr>
            <td><strong>name</strong></td>
            <td>The name of the user</td>
        </tr>
        <tr>
            <td><strong>email</strong></td>
            <td>The contact email address</td>
        </tr>
        <tr>
            <td><strong>password</strong></td>
            <td>The account password</td>
        </tr>
        <tr>
            <td><strong>phone</strong></td>
            <td>The contact phone number</td>
        </tr>
        <tr>
            <td><strong>address</strong></td>
            <td>The physical address</td>
        </tr>
        <tr>
            <td><strong>role</strong></td>
            <td>The role of the user ('admin' / 'user')</td>
        </tr>
    </table>
<br>
    <h3>Bike Model</h3>
    <table>
        <tr>
            <td><strong>name</strong></td>
            <td>The name of the bike model</td>
        </tr>
        <tr>
            <td><strong>description</strong></td>
            <td>A brief description of the bike</td>
        </tr>
        <tr>
            <td><strong>pricePerHour</strong></td>
            <td>The rental price per hour</td>
        </tr>
        <tr>
            <td><strong>isAvailable</strong></td>
            <td>Whether the bike is available for rental (default: true)</td>
        </tr>
        <tr>
            <td><strong>cc</strong></td>
            <td>The engine capacity of the bike in cubic centimeters</td>
        </tr>
        <tr>
            <td><strong>year</strong></td>
            <td>The manufacturing year of the bike</td>
        </tr>
        <tr>
            <td><strong>model</strong></td>
            <td>The model of the bike</td>
        </tr>
        <tr>
            <td><strong>brand</strong></td>
            <td>The brand of the bike</td>
        </tr>
    </table>
<br>
    <h3>Rental Model</h3>
    <table>
        <tr>
            <td><strong>userId</strong></td>
            <td>Reference to the User model</td>
        </tr>
        <tr>
            <td><strong>bikeId</strong></td>
            <td>Reference to the Bike model</td>
        </tr>
        <tr>
            <td><strong>startTime</strong></td>
            <td>The start time of the rental</td>
        </tr>
        <tr>
            <td><strong>returnTime</strong></td>
            <td>The return time of the rental</td>
        </tr>
        <tr>
            <td><strong>totalCost</strong></td>
            <td>The total cost of the rental</td>
        </tr>
        <tr>
            <td><strong>isReturned</strong></td>
            <td>Indicates if the bike has been returned (default: false)</td>
        </tr>
    </table>
<br>
    <h2>Setup Instructions</h2>
    <ul>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/yourusername/bike-rental-api.git</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Start the server:</strong>
            <pre><code>npm start</code></pre>
        </li>
        <li><strong>Environment Variables:</strong> Make sure to set up your environment variables as needed (e.g., database URL, secret keys) to ensure the API works correctly.</li>
    </ul>
<br>
    <h2>Tech Stack</h2>
    <ul>
        <li><strong>Node.js</strong> and <strong>Express</strong> for the server</li>
        <li><strong>MongoDB</strong> for database</li>
        <li><strong>Mongoose</strong> for schema and model management</li>
        <li><strong>JWT</strong> for authentication</li>
        <li><strong>BCryptJS</strong> for password hashing</li>
    </ul>
<br>
    <h2>Tools & Libraries</h2>
    <ul>
        <li><strong>Node.js</strong> - A JavaScript runtime for building scalable applications.</li>
        <li><strong>Express.js</strong> - A web framework for Node.js, used to build the API.</li>
        <li><strong>Mongoose</strong> - A MongoDB object modeling tool.</li>
        <li><strong>JWT</strong> - JSON Web Tokens for secure authentication.</li>
        <li><strong>BcryptJS</strong> - A library for hashing passwords.</li>
    </ul>
<br>
    <h2>License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
<br>
    <h2>Contact</h2>
    <p>If you have any questions, issues, or suggestions, feel free to reach out:</p>
    <p><strong>Shafin</strong><br>Email: <a href="mailto:shafinsadnan08@gmail.com">shafinsadnan08@gmail.com</a></p>

</body>
</html>
