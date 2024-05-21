export type User = {
  id: string;
  name: string;
  email: string;
  goal: number;
  password: string;
};
 
export type Outlet = {
  id: string;
  voltage: number;
  kwh: number;
}

export type Room = {
  id: string;
  name: string;
  device_id: string;
}

export type Device = {
  id: string;
  device: string;
  outlet_id: string;
}

export type WalletTable = {
  id: string;
  name: string;
  device: string;
  kwh: number;
}