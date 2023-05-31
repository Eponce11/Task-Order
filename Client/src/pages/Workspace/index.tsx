
import { Navbar } from "../../components";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import List from "./components/List";

const Workspace = () => {

    const lists = [0, 0, 0, 0];

    return (
        <div className="w-full h-full flex flex-col bg-secondary">
            <Navbar />
            <div className="flex-1 flex">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Header />
                    <div className="p-3 flex-1 flex">
                        { lists.map( (list:any) => <List /> ) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workspace;