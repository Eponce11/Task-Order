
import { Navbar } from "../../components";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const Workspace = () => {


    return (
        <div className="w-full h-full flex flex-col">
            <Navbar />
            <div className="flex-1 flex">
                <Sidebar />
                <div className="flex-1">
                    <Header />
                </div>
            </div>
        </div>
    )
}

export default Workspace;