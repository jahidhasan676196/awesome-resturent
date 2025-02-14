import { Outlet } from "react-router-dom";
import Dsidbar from "../components/dashbordComponent/Dsidbar";


const DashBoardLayout = () => {
    return (
        <div className="flex ">
            <div className="w-72 min-h-screen bg-[#D1A054]">
            <Dsidbar></Dsidbar>
            </div>
          <div className="w-full bg-[#F6F6F6] min-h-screen">
          <Outlet></Outlet>
          </div>
        </div>
    );
};

export default DashBoardLayout;