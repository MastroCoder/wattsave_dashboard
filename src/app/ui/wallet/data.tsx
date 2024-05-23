import { fetchUsers, fetchWalletTable } from "@/app/lib/fetcher";
import { interBold } from "../fonts";

export default async function Data() {
  const tableData = await fetchWalletTable();
  const avgConsumption: number = 5780.25;
  let sum: number = 0;
  let value: number = 0;

  const users = await fetchUsers();
  const user = users[0];

  for (let i = 0; i < tableData.length; i++) {
    sum += tableData[i].kwh;
  }
  // Valor obtido pela internet
  value = (sum / 100) * 7.57;
  let diff = value - user.goal;
  return (
    <div className={`${interBold.className}`}>
      <h3 className="text-3xl">
        Consumo:{" "}
        <span
          className={
            value - avgConsumption > 0 ? "text-red-700" : "text-green-700"
          }
        >
          {sum}
        </span>{" "}
        kWh.
      </h3>
      <p>Seu consumo está melhor que a média brasileira para 2023.</p>
      <h3 className="text-3xl">
        Valor esperado:{" "}<span className={
            diff > 0 ? "text-red-700" : "text-green-700"
        }>R$ {value}</span>
      </h3>
      <p>Sua meta é de R$ {user.goal}</p>
    </div>
  );
}
