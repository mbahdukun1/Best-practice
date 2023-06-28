export default function CategoryTable ({data,id}) {
    return (
        <>
                      <tr>
                        <td>{id}</td>
                        <td>{data.name}</td>
                      </tr>
                      </>
    )
}