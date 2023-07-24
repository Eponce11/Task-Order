import { useState } from "react";
import { SettingsBK } from "../../../../assets/svg";
import { NewBoard } from "..";

interface headerProps {
  title: string;
  workspaceId: string;
}

const Header = (props: headerProps) => {
  const { title, workspaceId } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="w-full h-10 flex justify-between items-center mb-4">
      <div className="h-full flex items-center">
        <div className="h-full aspect-square bg-blue-500 mr-2" />
        <span className="text-lg">{title}</span>
      </div>
      <ul className="flex items-center justify-center h-full">
        <li className="h-full flex items-center justify-center p-2 bg-dimGrey rounded text-sm mr-2 hover:bg-hoverGrey cursor-pointer">
          <img src={SettingsBK} alt="" className="h-4 aspect-square mr-1" />
          Settings
        </li>
        <li
          className="h-full flex items-center justify-center p-2 bg-secondary rounded border-2 text-sm text-white hover:bg-hoverPurple cursor-pointer"
          onClick={() => setIsModalOpen((prev: boolean) => !prev)}
        >
          New Board
        </li>
      </ul>
      {isModalOpen && (<NewBoard setIsModalOpen={setIsModalOpen} />)}
    </div>
  );
};

export default Header;
