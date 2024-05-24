import {
  fetchDevices,
  fetchOutletById,
  fetchOutlets,
  fetchRooms,
  fetchWalletTable,
} from "@/app/lib/fetcher";

export default async function Table() {
  const tableData = await fetchWalletTable();
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  Dispositivo
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Consumo
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cômodo
                </th>
              </tr>
            </thead>
            {tableData?.map((data) => (
              <tbody className="bg-white" key={data.name}>
                <tr>
                  <td>{data.device}</td>
                  <td>{data.kwh}{' '}kWh</td>
                  <td>{data.name}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
