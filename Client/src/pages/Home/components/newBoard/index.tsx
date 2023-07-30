import { useState } from "react";
import { Modal } from "../../../../components";
import { CancelBK } from "../../../../assets/svg";
import { useAppSelector } from "../../../../app/hooks";

interface newBoardProps {
  setIsModalOpen: any;
}

const NewBoard = (props: newBoardProps) => {
  const { setIsModalOpen } = props;
  const workspaces = useAppSelector((state) => state.workspaces.workspaces);
  const [title, setTitle] = useState<string>("");
  const [selectedWorkspace, setSelectedWorkspace] = useState<string>('');

  return (
    <Modal className={"w-[300px] bg-white p-3 flex flex-col items-center"}>
      <div className="w-full relative">
        <h3 className="text-center">Create board</h3>
        <img
          src={CancelBK}
          alt=""
          className="h-6 aspect-square right-0 top-0 absolute hover:cursor-pointer"
          onClick={() => setIsModalOpen((prev: boolean) => !prev)}
        />
      </div>
      <div className="h-32 w-4/5 bg-[red] mt-2"></div>
      <ul className="flex w-full justify-between mt-5">
        <li className="h-10 w-12 bg-[blue]" />
        <li className="h-10 w-12 bg-[blue]" />
        <li className="h-10 w-12 bg-[blue]" />
        <li className="h-10 w-12 bg-[blue]" />
        <li className="h-10 w-12 bg-[blue]" />
      </ul>
      <div className="w-full flex flex-col">
        <label>Board title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-full flex flex-col">
        <label>Workspace</label>
        <select>
          {workspaces.map((workspace: any) => {
            return (
              <option key={workspace.id} value={workspace.id}>
                {workspace.title}
              </option>
            );
          })}
        </select>
      </div>
      <button>Create</button>
    </Modal>
  );
};

export default NewBoard;
