import { Modal } from "../../../../components";
import { CancelBK } from "../../../../assets/svg";

interface newBoardProps {
  setIsModalOpen: any;
}
const NewBoard = (props: newBoardProps) => {
  const { setIsModalOpen } = props;
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
        <input type="text" />
      </div>
      <div className="w-full flex flex-col">
        <label>Workspace</label>
        <select>
          <option value="">Some Option</option>
          <option value="">Some Option</option>
          <option value="">Some Option</option>
        </select>
      </div>
      <button>Create</button>
    </Modal>
  );
};

export default NewBoard;
