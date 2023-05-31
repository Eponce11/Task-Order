
import { sideBarLinks } from "../../constants";
import { FeatureWT } from "../../../../assets/svg";


const Sidebar = () => {

    return (
        <div className="w-64 bg-primary text-white relative border-r-[1px] border-borderPurple">
            <div className="flex items-center p-2 h-12 border-b-[1px] border-borderPurple">
                <div className="bg-[blue] h-8 aspect-square mr-2" />
                <span className="text-lg font-semibold">WorkspaceTitle</span>
            </div>
            <ul className="w-full mt-2">
                {
                    sideBarLinks.map( (link:any) => {
                        return (
                            <li className="p-2 hover:bg-hoverPurple cursor-pointer text-sm flex items-center">
                                <img src={link.icon} alt="" className="w-5 aspect-square mr-1"/>
                                {link.text}
                            </li>
                        )
                    })
                }
            </ul>
            <div className="p-2">
                <h4 className="font-semibold">Your Boards</h4>
            </div>
            <ul>
                <li className="flex p-2 items-center hover:bg-hoverPurple cursor-pointer">
                    <div className="bg-[red] h-6 aspect-square mr-2" />
                    <span className="text-sm">BoardTitle</span>
                </li>
            </ul>
            <div className="w-full bg-primary p-3 bottom-0 absolute border-t-[1px] border-borderPurple">
                <div className="w-full h-8 bg-[red] rounded flex items-center p-2">
                    <img src={FeatureWT} alt="" className="h-4 aspect-square mr-2" />
                    <span className="text-sm">More Features Coming Soon</span>
                </div>
            </div>
        </div>
    )
}


export default Sidebar;