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
      <table className="table-fixed w-full">
        <tbody>
          <tr>
            <td className="text-2xl">
              Consumo:{" "}
              <span
                className={
                  value - avgConsumption > 0 ? "text-red-700" : "text-green-700"
                }
              >
                {sum}
              </span>{" "}
              kWh.
            </td>
            <td>
              Seu consumo está{" "}
              <span
                className={
                  value - avgConsumption > 0 ? "text-red-700" : "text-green-700"
                }
              >
                {value - avgConsumption > 0 ? "pior" : "melhor"}
              </span>{" "}
              que a média brasileira para 2023.
            </td>
          </tr>
          <tr>
            <td className="text-2xl">
              Valor esperado:{" "}
              <span className={diff > 0 ? "text-red-700" : "text-green-700"}>
                R$ {value}
              </span>
            </td>
            <td>Sua meta é de R$ {user.goal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
