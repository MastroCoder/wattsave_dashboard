export type User = {
  id: string;
  name: string;
  email: string;
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
}

export type Device = {
  id: string;
  name: string;
}