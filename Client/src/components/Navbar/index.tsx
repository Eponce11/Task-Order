
import { navbarList } from "./constants";
import { ChevronDownWT } from "../../assets/svg"

const Navbar = () => {


    return (
        <div className="w-full bg-primary text-white py-2 px-3 flex items-center sticky top-0 z-10 border-b-[1px] relative">
            <h3 className="text-2xl mr-7">Task-Order</h3>
            <ul className="flex items-center">
                {
                    navbarList.map( (listItem:any, idx:number) => {
                        return (
                            <li 
                                className= {`
                                    ${navbarList.length - 1 !== idx ? "mr-4" : ""} py-1 px-2 hover:bg-hoverPurple rounded cursor-pointer
                                    flex 
                                `}
                            >
                                { listItem.title }
                                <img src={ChevronDownWT} alt="" />
                            </li>
                        )
                    })
                }
            </ul>
            <div className="bg-[blue] right-3 h-7 aspect-square rounded-full absolute text-xs font-medium flex items-center justify-center">
                EP
            </div>
        </div>
    )
}

export default Navbar;