export default function ProductTable ({data,id}) {
    return (
        <>
                      <tr>
                        <td>{id}</td>
                        <td>{data.name}</td>
                        <td>{data.description}</td>
                        <td>
                            <img className="img-fluid" src={data.imageUrl}/>
                        </td>
                        <td>{data.stock}</td>
                        <td>{data.categoryId}</td>
                      </tr>
                      </>
    )
}