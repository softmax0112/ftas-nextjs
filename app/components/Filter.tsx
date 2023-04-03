import Link from 'next/link'

export default function InputForm () {
  return (
    <div>
      ID <input /><br /><br />
      Date <input /><br /><br />
      Amount <input /><br /><br />
      Retailer <input /><br /><br />
      <button>submit</button><br /><br />
      <Link href='result'>dsd</Link>
    </div>
  )
}