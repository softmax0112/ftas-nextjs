type Data = {
  id: string,
  date: string,
  amount: number,
  retailer: string
}

export default function ListData ({ data }: { data: Data[] }) {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>DATE</th>
          <th>AMOUNT</th>
          <th>RETAILER</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map(({ id, date, amount, retailer }: Data) => <tr key={id}>
            <td>{id}</td>
            <td>{date}</td>
            <td>{amount}</td>
            <td>{retailer}</td>
          </tr>
          )
        }
      </tbody>
    </table>
  )
}