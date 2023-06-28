import BarChart from "../components/barChart";
import LineChart from "../components/lineChart";
import PieChart from "../components/pieChart";

export default function StartingPage() {
    return (
        <>
        <div style={{width:"100vw",height:"100vh"}}>
       <BarChart/>
       <PieChart/>
       <LineChart/>
       </div>
        </>
    )
}