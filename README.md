<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bike Rental API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        h1 {
            font-size: 2.5em;
            text-align: center;
        }
        h2 {
            color: #2980b9;
        }
        h3 {
            color: #16a085;
        }
        code {
            background-color: #ecf0f1;
            padding: 0.2em 0.4em;
            border-radius: 4px;
            font-size: 1em;
        }
        pre {
            background-color: #ecf0f1;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            font-size: 1.1em;
        }
        .section {
            margin-bottom: 40px;
        }
        .bold {
            font-weight: bold;
        }
        .highlight {
            color: #e74c3c;
        }
    </style>
</head>
<body>
    <br>
    <h1>🚴‍♂️ Bike Rental API</h1>
    <p>Welcome to the <strong>Bike Rental API</strong>, a modern solution for managing bike rentals, users, and administrative tasks. This API allows users to rent bikes, manage their rentals, and provides administrative access to manage the bike fleet.</p>
    <br>
    <div class="section">
        <h2>🚀 Features</h2>
        <ul>
            <li><strong>User Management:</strong> Register, update your profile, and manage your account.</li>
            <li><strong>Bike Rentals:</strong> Rent bikes, view available bikes, and return them when done.</li>
            <li><strong>Admin Dashboard:</strong> Manage bike availability, add or remove bikes, and more.</li>
        </ul>
    </div>
<br>
    <div class="section">
        <h2>📡 API Endpoints</h2>
<br>
        <h3>Users</h3>
        <ul>
            <li><code>GET /users/me</code> - Get the current user's profile details.</li>
            <li><code>PUT /users/me</code> - Update the current user's profile information (name, email, phone, etc.).</li>
        </ul>
<br>
        <h3>Rentals</h3>
        <ul>
            <li><code>GET /rentals</code> - Get a list of all rentals.</li>
            <li><code>POST /rentals</code> - Create a new rental (Rent a bike).</li>
            <li><code>PUT /rentals/:id/return</code> - Mark the rental as returned. Specify the rental ID.</li>
        </ul>
<br>
        <h3>Admin Routes</h3>
        <ul>
            <li><code>GET /admin/bikes</code> - Get a list of all bikes available for rent.</li>
            <li><code>POST /admin/bikes</code> - Add a new bike to the rental fleet.</li>
            <li><code>PUT /admin/bikes/:id</code> - Update bike details (e.g., availability, price, etc.).</li>
            <li><code>DELETE /admin/bikes/:id</code> - Remove a bike from the fleet.</li>
        </ul>
<br>
        <h3>Home Route</h3>
        <ul>
            <li><code>GET /</code> - Get a welcome message or home page details.</li>
        </ul>
    </div>
<br>
    <div class="section">
        <h2>🧩 Models</h2>
<br>
        <h3>User Model</h3>
        <pre><code>
{
  name: String,          // The name of the user
  email: String,         // The contact email address
  password: String,      // The account password
  phone: String,         // The contact phone number
  address: String,       // The physical address
  role: String,          // The role of the user ('admin' / 'user')
}
        </code></pre>
<br>
        <h3>Bike Model</h3>
        <pre><code>
{
  name: String,          // The name of the bike model
  description: String,   // A brief description of the bike
  pricePerHour: Number,  // The rental price per hour
  isAvailable: Boolean,  // Whether the bike is available for rental (default: true)
  cc: Number,            // The engine capacity of the bike in cubic centimeters
  year: Number,          // The manufacturing year of the bike
  model: String,         // The model of the bike
  brand: String,         // The brand of the bike
}
        </code></pre>
<br>
        <h3>Rental Model</h3>
        <pre><code>
{
  userId: ObjectId,      // Reference to the User model
  bikeId: ObjectId,      // Reference to the Bike model
  startTime: Date,       // The start time of the rental
  returnTime: Date,      // The return time of the rental
  totalCost: Number,     // The total cost of the rental
  isReturned: Boolean,   // Indicates if the bike has been returned (default: false)
}
        </code></pre>
    </div>
<br>
    <div class="section">
        <h2>⚙️ Setup Instructions</h2>
        <ol>
            <li><span class="bold">Clone the repository:</span>
                <pre><code>git clone https://github.com/yourusername/bike-rental-api.git</code></pre>
            </li>
            <li><span class="bold">Install dependencies:</span>
                <pre><code>npm install</code></pre>
            </li>
            <li><span class="bold">Start the server:</span>
                <pre><code>npm start</code></pre>
            </li>
            <li><span class="bold">Environment Variables:</span> Make sure to set up your environment variables as needed (e.g., database URL, secret keys) to ensure the API works correctly.</li>
        </ol>
    </div>
<br>
    <div class="section">
        <h2>💻 Tech Stack</h2>
        <ul>
            <li><strong>Node.js</strong> and <strong>Express</strong> for the server</li>
            <li><strong>MongoDB</strong> for database</li>
            <li><strong>Mongoose</strong> for schema and model management</li>
            <li><strong>JWT</strong> for authentication</li>
            <li><strong>BCryptJS</strong> for password hashing</li>
        </ul>
    </div>
<br>
    <div class="section">
        <h2>🎨 Design & Styling</h2>
        <p>The API is built with modern practices in mind and designed to be easy to integrate into a larger application. It follows RESTful conventions to ensure scalability and readability.</p>
    </div>
<br>
    <div class="section">
        <h2>🛠️ Tools & Libraries</h2>
        <ul>
            <li><strong>Node.js</strong> - A JavaScript runtime for building scalable applications.</li>
            <li><strong>Express.js</strong> - A web framework for Node.js, used to build the API.</li>
            <li><strong>Mongoose</strong> - A MongoDB object modeling tool.</li>
            <li><strong>JWT</strong> - JSON Web Tokens for secure authentication.</li>
            <li><strong>BcryptJS</strong> - A library for hashing passwords.</li>
        </ul>
    </div>
<br>
    <div class="section">
        <h2>📄 License</h2>
        <p>This project is licensed under the MIT License - see the <a href="LICENSE" target="_blank" class="highlight">LICENSE</a> file for details.</p>
    </div>
<br>
    <div class="section">
        <h2>🔗 Contact</h2>
        <p>If you have any questions, issues, or suggestions, feel free to reach out:</p>
        <p><strong>Shafin</strong><br>Email: <a href="mailto:shafinsadnan08@gmail.com">shafinsadnan08@gmail.com</a></p>
    </div>

</body>
</html>
