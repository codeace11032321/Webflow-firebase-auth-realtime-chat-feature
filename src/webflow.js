// e7a01a4dcf9ca43b8ccc7a0f92a0332e1179b786c5d32b8616d28624792b7d1c --- WEBFLOW API TOKEN

// Create Live Collection Item (POST /collections/:collection_id/items/live)

// Define the createItem function

// Function to create an item in Webflow
// server.js (or index.js)
// server.js (or index.js)
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

// Initialize the Express app
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Route to create an item in Webflow
app.post('/create-item', async (req, res) => {
  const userProfile = req.body;

  try {
    const response = await fetch(
      'https://api.webflow.com/collections/660b7c750a4e24b200bd0e67/items/live',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer e7a01a4dcf9ca43b8ccc7a0f92a0332e1179b786c5d32b8616d28624792b7d1c`, // Hardcoded Webflow API Token for now
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            name: userProfile.name,
            slug: userProfile.name.toLowerCase().replace(/\s+/g, '-'),
            isArchived: false,
            isDraft: false,
            email: userProfile.email,
            uuid: userProfile.uid,
            bio: userProfile.bio,
            profilepicurl: userProfile.pictureUrl,
            address: userProfile.address,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to create item: ${response.status}`);
    }

    const data = await response.json();
    res.json(data); // Send Webflow API response to the frontend
  } catch (error) {
    console.error('Error in creating Webflow item:', error);
    res.status(500).json({ error: error.message });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
