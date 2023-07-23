import { useState, useEffect } from "react";
import { navLinks } from "../../constants";
import { AddBK } from "../../../../assets/svg";
import { NewWorkspace } from "..";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { useGetAllWorkspaces } from "../../../../hooks/workspace";
import { setWorkspaces } from "../../../../app/slices/workspacesSlice";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const workspaces = useAppSelector((state) => state.workspaces.workspaces);
  const isFetched = useAppSelector((state) => state.workspaces.isFetched);
  const signedInUserId = useAppSelector((state) => state.signedInUser.id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const allWorkspaces = await useGetAllWorkspaces(signedInUserId);
        dispatch(
          setWorkspaces({
            workspaces: allWorkspaces,
            isFetched: true,
          })
        );
      } catch (error: any) {
        console.log(error);
      }
    };
    if (!isFetched) fetchData();
  }, []);

  return (
    <div className="w-72 relative">
      <ul className="w-full border-b-2">
        {navLinks.map((link: any) => {
          return (
            <li className="rounded p-2 hover:bg-hoverGrey cursor-pointer flex items-center">
              <img src={link.icon} className="w-4 aspect-square mr-1" />
              {link.text}
            </li>
          );
        })}
      </ul>
      <div className="w-full p-2 flex justify-between items-center">
        <h5>Workspaces</h5>
        <img
          src={AddBK}
          alt=""
          className="h-7 aspect-square p-1 hover:bg-hoverGrey rounded cursor-pointer"
          onClick={() => setIsModalOpen((prev: boolean) => !prev)}
        />
      </div>
      <ul className="w-full">
        {
          workspaces.map((workspace:any) => {
            return (
              <li className="flex items-center p-3 rounded hover:bg-hoverGrey cursor-pointer">
                <div className="bg-[green] h-6 aspect-square mr-2" />
                <span>{workspace.title}</span>
              </li>
            )
          })
        }
      </ul>
      {isModalOpen && <NewWorkspace setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Sidebar;
