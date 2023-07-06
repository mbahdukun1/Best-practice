import BarChart from "../components/barChart";
import LineChart from "../components/lineChart";
import PieChart from "../components/pieChart";
import { toast, ToastContainer } from "react-toastify";

export default function StartingPage() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr", gridGap: "20px" }}>
            <div style={{ gridColumn: "1 / 3" }}>
              <BarChart />
            </div>
            <div style={{ width: "600px" }}>
              <PieChart />
            </div>
            <div>
              <LineChart />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </>
  );
}
