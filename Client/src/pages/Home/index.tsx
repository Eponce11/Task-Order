
import { Navbar } from "../../components";
import Section from "./components/section";


const Home = () => {


    const templates = [{title: "Title", isTemplate: true}, {title: "Title", isTemplate: true}];
    const starred = [{title: "Title", isStarred: true}, {title: "Title", isStarred: true}];
    const workspaces = [
        [{title: "Title", isStarred: false}, {title: "Title", isStarred: true}, {title: "Title", isStarred:false}],
        [{title: "Title", isStarred: false}, {title: "Title", isStarred:false}]
    ];

    return (
        <div className="h-full w-full bg-white flex flex-col">
            <Navbar />
            <div className="flex-1 px-52">
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
    )
}

export default Home;