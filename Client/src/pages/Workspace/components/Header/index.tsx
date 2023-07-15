
import { UserWT, AddUserBK } from "../../../../assets/svg";

const Header = (props:any) => {

  const { title } = props;


    return (
        <ul className="w-full h-12 bg-dimPurple text-white flex items-center px-3 relative">
            <li className="text-xl mr-5">{title}</li>
            <li className="flex items-center text-sm hover:bg-hoverPurple py-2 px-3 rounded cursor-pointer">
                <img src={UserWT} alt="" className="h-4 aspect-square mr-2"/>
                Workspace Visible
            </li>
            <li className="flex items-center bg-dimWhite text-black text-sm py-1 pr-3 pl-2 rounded hover:bg-white cursor-pointer absolute right-3">
                <img src={AddUserBK} alt="" className="h-5 aspect-square mr-1"/>
                Share
            </li>
        </ul>
    )
}


export default Header;