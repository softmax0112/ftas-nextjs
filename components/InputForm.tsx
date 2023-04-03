import { useState } from "react";

export default function InputForm ({create}: {create: Function}) {
  const [ id, setId ] = useState("");
  const [ date, setDate ] = useState("");
  const [ amount, setAmount ] = useState("");
  const [ retailer, setRetailer ] = useState("");

  const OnClick = () => {
    create(id, date, amount, retailer);
  };

  return (
    <div>
      ID <input onChange={e => setId(e.target.value)} /><br /><br />
      Date <input onChange={e => setDate(e.target.value)} /><br /><br />
      Amount <input onChange={e => setAmount(e.target.value)} /><br /><br />
      Retailer <input onChange={e => setRetailer(e.target.value)} /><br /><br />
      <button onClick={OnClick}>submit</button>
    </div>
  )
}