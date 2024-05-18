import { interBold } from "@/app/ui/fonts";
import Card from "@/app/ui/wallet/card";
import Table from "@/app/ui/dashboard/table";
import { fetchDevices } from "@/app/lib/fetcher";

export default async function Page() {
  const devices = await fetchDevices();
  console.log(devices);
  return (
    <div className={`${interBold.className}`}>
      <h1 className="text-green-700 text-xl">Carteira</h1>
      <div className="flex w-full">
        <h3>Gastos de energia</h3>
      </div>
      <div className="flex w-full">
        <Card>
          <Table />
        </Card>
      </div>
      <span>{devices[0].name}</span>
      <span>{devices[1].name}</span>
      <span>{devices[2].name}</span>
      <span>{devices[3].name}</span>
    </div>
  );
}
