import { interBold } from "@/app/ui/fonts";
import Card from "@/app/ui/wallet/card";
import Table from "@/app/ui/dashboard/table";
import Data from "@/app/ui/wallet/data";
import { array } from "zod";

export default async function Page() {
  const tips = [
    "O Ferro elétrico dele ser ligado quando houver uma grande quantidade de roupas para passar.",
    "Evite o uso do chuveiro entre 17h e 22h. Ele é um dos aparelhos que mais consome energia.",
    "Feche o chuveiro para se ensaboar."
  ]
  
  let rand = tips[Math.floor(Math.random()*tips.length)]
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
          <p>Dica de economia: {rand}</p>
        </Card>
      </div>
    </div>
  );
}
