export default function Table() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  Nome
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Valor gasto
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Data
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Pessoa
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td>Geladeira</td>
                <td>-13.00</td>
                <td>12/04</td>
                <td>Pai</td>
              </tr>
              <tr>
                <td>Geladeira</td>
                <td>-13.00</td>
                <td>12/04</td>
                <td>Pai</td>
              </tr>
              <tr>
                <td>Geladeira</td>
                <td>-13.00</td>
                <td>12/04</td>
                <td>Pai</td>
              </tr>
              <tr>
                <td>Geladeira</td>
                <td>-13.00</td>
                <td>12/04</td>
                <td>Pai</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
