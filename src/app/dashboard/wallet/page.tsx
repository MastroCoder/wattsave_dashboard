import { interBold } from "@/app/ui/fonts";
import Card from "@/app/ui/wallet/card";
import Table from "@/app/ui/dashboard/table";
import Data from "@/app/ui/wallet/data";

export default async function Page() {
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
      <div className="flex w-full">
        <Data />
      </div>
      <div className="flex w-full">
        <Card>
          <p>Dica de economia: {}</p>
        </Card>
      </div>
    </div>
  );
}
