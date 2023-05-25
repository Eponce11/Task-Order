
import { Navbar } from "../../components";
import Section from "./components/section";
import Sidebar from "./components/sidebar";


const Home = () => {


    const templates = [{title: "Title", isTemplate: true}, {title: "Title", isTemplate: true}];
    const starred = [{title: "Title", isStarred: true}, {title: "Title", isStarred: true}];
    const workspaces = [
        [{title: "Title", isStarred: false}, {title: "Title", isStarred: true}, {title: "Title", isStarred:false}],
        [{title: "Title", isStarred: false}, {title: "Title", isStarred:false}]
    ];

    return (
        <div className="h-full w-full bg-white flex flex-col relative overflow-hidden">
            <Navbar />
            <div className="flex-1 px-52 flex relative overflow-scroll mt-3">
                <Sidebar />
                <div className="w-full ml-4 overflow-y-scroll">
                    <h3 className="text-xl">Templates</h3>
                    <Section data={templates}/>
                    <h3 className="text-xl mt-2">Starred</h3>
                    <Section data={starred}/>
                    <h3 className="text-xl mt-2">Workspaces</h3>
                    {
                        workspaces.map( (workspace:any) => {
                            return (
                                <Section data={workspace} isWorkspace={true}/>
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Home;