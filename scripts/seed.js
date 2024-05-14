const { db } = require('@vercel/postgres');

const { users } = require('../src/app/lib/user-data.ts');
const { outlets } = require('../src/app/lib/outlet-data.ts');
const { rooms } = require('../src/app/lib/room-data.ts');
const { devices } = require('../src/app/lib/device-data.ts')

const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedOutlets(client){
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS outlets (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        voltage INT NOT NULL,
        kwh REAL NOT NULL
      );
    `;

    console.log(`Created "outlets" table`);

    // Insert data into the "users" table
    const insertedOutlets = await Promise.all(
      outlets.map(async (outlet) => {
        return client.sql`
        INSERT INTO outlets (id, voltage, kwh)
        VALUES (${outlet.id}, ${outlet.voltage}, ${outlet.kwh})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedOutlets.length} outlets`);

    return {
      createTable,
      outlets: insertedOutlets,
    };
  } catch (error) {
    console.error('Error seeding outlets:', error);
    throw error;
  }
}

async function seedRooms(client){
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS rooms (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "rooms" table`);

    // Insert data into the "users" table
    const insertedRooms = await Promise.all(
      rooms.map(async (room) => {
        return client.sql`
        INSERT INTO rooms (id, name)
        VALUES (${room.id}, ${room.name})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedRooms.length} rooms`);

    return {
      createTable,
      outlets: insertedRooms,
    };
  } catch (error) {
    console.error('Error seeding rooms:', error);
    throw error;
  }
}

async function seedDevices(client){
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS devices (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "devices" table`);

    // Insert data into the "users" table
    const insertedDevices = await Promise.all(
      devices.map(async (device) => {
        return client.sql`
        INSERT INTO devices (id, name)
        VALUES (${device.id}, ${device.name})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedDevices.length} devices`);

    return {
      createTable,
      outlets: insertedDevices,
    };
  } catch (error) {
    console.error('Error seeding devices:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedOutlets(client);
  await seedRooms(client);
  await seedDevices(client)

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
