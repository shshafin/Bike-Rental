<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
</head>
<body>
    <h1>Bike Rental API</h1>
    <p>Welcome to the <strong>Bike Rental Reservation System </strong>, a modern and scalable solution for managing bike rentals, users, and administrative tasks. This API provides seamless bike rental services, from renting a bike to managing user profiles, and even administrative access for managing bike fleets.</p>
    <h2>Key Features</h2>
    <ul>
        <li><strong>User Management:</strong> Register, update your profile, and manage your account details.</li>
        <li><strong>Bike Rentals:</strong> Rent bikes, check availability, and return bikes seamlessly.</li>
        <li><strong>Admin Dashboard:</strong> Manage bike fleet, add/remove bikes, update bike details, and more.</li>
    </ul>
    <h2>API Endpoints</h2>
    <h3>1. Users</h3>
    <ul>
        <li><strong>GET /users/me</strong> - Retrieve the current user's profile details.</li>
        <li><strong>PUT /users/me</strong> - Update the current user's profile information (name, email, phone, etc.).</li>
    </ul>
    <h3>2. Rentals</h3>
    <ul>
        <li><strong>GET /rentals</strong> - Get a list of all ongoing rentals.</li>
        <li><strong>POST /rentals</strong> - Create a new rental (Rent a bike).</li>
        <li><strong>PUT /rentals/:id/return</strong> - Mark a rental as returned by specifying the rental ID.</li>
    </ul>
    <h3>3. Admin Routes</h3>
    <ul>
        <li><strong>GET /admin/bikes</strong> - Get a list of all bikes available for rent.</li>
        <li><strong>POST /admin/bikes</strong> - Add a new bike to the rental fleet.</li>
        <li><strong>PUT /admin/bikes/:id</strong> - Update bike details (e.g., availability, price, etc.).</li>
        <li><strong>DELETE /admin/bikes/:id</strong> - Remove a bike from the fleet.</li>
    </ul>
    <h3>4. Home Route</h3>
    <ul>
        <li><strong>GET /</strong> - Retrieve the welcome message or home page details.</li>
    </ul>
    <h2>Data Models</h2>
    <h3>User Model</h3>
    <table>
        <tr>
            <td><strong>name</strong></td>
            <td>User's name</td>
        </tr>
        <tr>
            <td><strong>email</strong></td>
            <td>User's contact email</td>
        </tr>
        <tr>
            <td><strong>password</strong></td>
            <td>Account password</td>
        </tr>
        <tr>
            <td><strong>phone</strong></td>
            <td>User's contact phone number</td>
        </tr>
        <tr>
            <td><strong>address</strong></td>
            <td>User's physical address</td>
        </tr>
        <tr>
            <td><strong>role</strong></td>
            <td>User role (admin/user)</td>
        </tr>
    </table>
    <h3>Bike Model</h3>
    <table>
        <tr>
            <td><strong>name</strong></td>
            <td>Bike model name</td>
        </tr>
        <tr>
            <td><strong>description</strong></td>
            <td>Short description of the bike</td>
        </tr>
        <tr>
            <td><strong>pricePerHour</strong></td>
            <td>Rental price per hour</td>
        </tr>
        <tr>
            <td><strong>isAvailable</strong></td>
            <td>Availability status (default: true)</td>
        </tr>
        <tr>
            <td><strong>cc</strong></td>
            <td>Engine capacity (in cubic centimeters)</td>
        </tr>
        <tr>
            <td><strong>year</strong></td>
            <td>Manufacturing year</td>
        </tr>
        <tr>
            <td><strong>model</strong></td>
            <td>Bike model</td>
        </tr>
        <tr>
            <td><strong>brand</strong></td>
            <td>Bike brand</td>
        </tr>
    </table>
    <h3>Rental Model</h3>
    <table>
        <tr>
            <td><strong>userId</strong></td>
            <td>Reference to User model</td>
        </tr>
        <tr>
            <td><strong>bikeId</strong></td>
            <td>Reference to Bike model</td>
        </tr>
        <tr>
            <td><strong>startTime</strong></td>
            <td>Start time of the rental</td>
        </tr>
        <tr>
            <td><strong>returnTime</strong></td>
            <td>Return time of the rental</td>
        </tr>
        <tr>
            <td><strong>totalCost</strong></td>
            <td>Total cost of the rental</td>
        </tr>
        <tr>
            <td><strong>isReturned</strong></td>
            <td>Status if the bike is returned (default: false)</td>
        </tr>
    </table>
    <h2>Setup Instructions</h2>
    <ul>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/shshafin/Bike-Rental.git</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Start the server:</strong>
            <pre><code>npm run dev</code></pre>
        </li>
        <li><strong>Environment Variables:</strong> Set the required environment variables (e.g., database URL, secret keys) for proper functionality. You can create a <code>.env</code> file with the following format:</li>
    </ul>
    <h3>.env Example</h3>
    <pre><code>
DATABASE_URL=mongodb://localhost:27017/bike_rental
JWT_SECRET=your_jwt_secret
BCrypt_SALT=10
    </code></pre>
    <h2>Tech Stack</h2>
    <ul>
        <li><strong>Node.js</strong> and <strong>Express</strong> for server-side development</li>
        <li><strong>MongoDB</strong> for NoSQL database storage</li>
        <li><strong>Mongoose</strong> for MongoDB object modeling</li>
        <li><strong>JWT</strong> for secure authentication</li>
        <li><strong>BcryptJS</strong> for hashing passwords</li>
    </ul>
    <h2>License</h2>
    <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
    <h2>Contact</h2>
    <p>If you have any questions, issues, or suggestions, feel free to reach out:</p>
    <p><strong>Shafin</strong><br>Email: <a href="mailto:shafinsadnan08@gmail.com">shafinsadnan08@gmail.com</a></p>

</body>
</html>
