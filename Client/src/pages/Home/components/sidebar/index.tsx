import { navLinks } from "../../constants";
import { Add } from "../../../../assets/svg";


const Sidebar = () => {




    return (
        <div className="w-64 flex-1">
            <ul className="w-full border-b-2">
                {
                    navLinks.map( (link:any) => {
                        return (
                            <li className="rounded p-2 hover:bg-hoverGrey cursor-pointer flex items-center">
                                <img 
                                    src={link.icon}
                                    className="w-4 aspect-square mr-1"
                                />
                                {link.text}
                            </li>
                        )
                    })
                }
            </ul>
            <div className="w-full p-2 flex justify-between items-center">
                <h5>Workspaces</h5>
                <img src={Add} alt="" className="h-7 aspect-square p-1 hover:bg-hoverGrey rounded cursor-pointer" />
            </div>
            <ul className="w-full">
                <li className="flex items-center p-3 rounded hover:bg-hoverGrey cursor-pointer">
                    <div className="bg-[green] h-6 aspect-square mr-2" />
                    <span>WorkspaceName</span>
                </li>
                <li className="flex items-center p-3 rounded hover:bg-hoverGrey cursor-pointer">
                    <div className="bg-[green] h-6 aspect-square mr-2" />
                    <span>WorkspaceName</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;