import { sql } from "@vercel/postgres";
import { User, Room, Outlet, Device } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchRooms() {
  noStore();
  try {
    const data = await sql<Room>`SELECT * FROM rooms`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch rooms data.");
  }
}

export async function fetchDevices() {
  noStore();
  try {
    const data = await sql<Device>`SELECT * FROM devices`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch devices data.");
  }
}

export async function fetchOutlets() {
  noStore();
  try {
    const data = await sql<Outlet>`SELECT * FROM outlets`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch outlets data.");
  }
}

export async function fetchUsers() {
  noStore();
  try {
    const data = await sql<Device>`SELECT * FROM users`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users data.");
  }
}
