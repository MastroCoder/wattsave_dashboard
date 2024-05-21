const outlets = [
  {
    id: "f9a368c3-63ee-4c61-b891-b2472b1adeea",
    voltage: 110,
    kwh: 1000,
  },
  {
    id: "a491a62e-4477-4515-afa7-98da5c0efa69",
    voltage: 110,
    kwh: 1000,
  },
  {
    id: "c5e04ef9-a2b0-4271-94a4-80589b8277ff",
    voltage: 110,
    kwh: 1000,
  },
  {
    id: "5bb8ed82-fcba-4e0b-9e74-d59df0e5afcc",
    voltage: 110,
    kwh: 1000,
  },
];

const devices = [
  {
    id: "1d1e2d1f-4b81-4e9c-9b81-2a53312638f9",
    device: "Ventilador",
    outlet_id: outlets[0].id,
  },
  {
    id: "b8969b90-9130-46e0-bbac-595477be21cd",
    device: "Playstation 5",
    outlet_id: outlets[1].id,
  },
  {
    id: "7d7fc74e-547d-4e27-9f9d-f5e8ff8cf7ad",
    device: "Televisão",
    outlet_id: outlets[2].id,
  },
  {
    id: "4d236733-e4e1-4f2e-a80e-2eb9560930fd",
    device: "Microondas",
    outlet_id: outlets[3].id,
  },
];

const rooms = [
  {
    id: "14245959-bc12-4386-92fc-1b9ab55ad055",
    name: "Sala",
    device_id: devices[0].id,
  },
  {
    id: "2aacb19e-de5b-4051-babc-4cc80f0c3347",
    name: "Quarto",
    device_id: devices[1].id,
  },
  {
    id: "0de98a24-8cdb-4cf5-9ddd-712b3d17cf59",
    name: "Banheiro",
    device_id: devices[2].id,
  },
  {
    id: "95aa368b-2c97-47ea-8ef5-df63b1820777",
    name: "Cozinha",
    device_id: devices[3].id,
  },
];

const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    goal: 200.0,
    password: "123456",
  },
];

module.exports = {outlets, devices, rooms, users}