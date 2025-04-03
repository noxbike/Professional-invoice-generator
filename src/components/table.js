export default function Table({head, data, editable, onChange}) {
  return (
    <table>
        <thead className="text-left">
            <tr>
                {head.map((item, index) => (
                    <th key={index}>{item}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    {Object.values(item).map((item, idx) => (
                        <td key={idx}>{editable && idx !== 3 ? <input className="max-w-[80px]" onChange={(e)=> onChange(e, index)} type={index === 0 ? "text" : "number"} value={item} /> : item}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
  )
}
