const mongoose = require('mongoose');
const User = require('./backend/models/User');
require('dotenv').config();

const adminUser = {
  name: 'Admin',
  email: 'admin@bustracker.com',
  password: 'admin123',
  role: 'admin'
};

async function createAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/bustracker');
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminUser.email });
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Create new admin user
    const user = new User(adminUser);
    await user.save();
    console.log('Admin user created successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
}

createAdmin(); 