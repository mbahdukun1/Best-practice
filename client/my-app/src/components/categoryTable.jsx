import { Link, useNavigate } from "react-router-dom";
import { PencilFill, Plus, PlusLg, PlusSquareFill, Trash } from "react-bootstrap-icons";

export default function CategoryTable({ data, id }) {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{data.name}</td>
        <td>
          <Link>
            <button>
              <PlusLg />
            </button>
          </Link>
          <button>
            <PencilFill />
          </button>
          <button>
            <Trash />
          </button>
        </td>
      </tr>
    </>
  );
}
