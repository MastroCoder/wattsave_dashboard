import { sql } from "@vercel/postgres";
import { User, Room, Outlet, Device, WalletTable } from "./definitions";
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
    const data = await sql<User>`SELECT * FROM users`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users data.");
  }
}

export async function fetchOutletById(id: string){
  noStore();
  try {
    const data = await sql<Outlet>`SELECT * FROM outlets WHERE id = ${id}`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch outlets data.");
  }
}
export async function fetchWalletTable(){
  noStore();
  try{
    const tableData = await sql<WalletTable>`
      SELECT 
        rooms.name, 
        devices.device, 
        outlets.kwh 
      FROM rooms 
      JOIN devices ON rooms.device_id = devices.id
      JOIN outlets ON devices.outlet_id = outlets.id
    `;
    return tableData.rows;
  }
  catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

