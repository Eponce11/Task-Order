import { Modal } from "../../../../components";
import { CancelBK } from "../../../../assets/svg";
const NewWorkspace = (props: any) => {
  const { setIsModalOpen } = props;

  return (
    <Modal>
      <img
        src={CancelBK}
        alt=""
        className="h-6 aspect-square right-3 top-3 absolute hover:cursor-pointer"
        onClick={() => setIsModalOpen((prev: boolean) => !prev)}
      />
      <h1 className="text-[26px] mb-2">Lets build a Workspace</h1>
      <p className="text-[19px] whitespace-normal w-[500px] mb-4">
        Boost your productivity by making it easier for everyone to access
        boards in one location.
      </p>
      <div className="flex flex-col">
        <label>Workspace title</label>
        <input type="text" className="border-solid h-9 pl-2 my-1" />
        <span className="text-[12px]">This is the name of your company, team or organization</span>
      </div>
      <div className="flex flex-col">
        <label>Workspace description</label>
        <input type="text" />
      </div>
      <button>Continue</button>
    </Modal>
  );
};

export default NewWorkspace;
