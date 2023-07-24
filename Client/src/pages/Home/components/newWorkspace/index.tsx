import { useState } from "react";
import { Modal } from "../../../../components";
import { CancelBK } from "../../../../assets/svg";
import { useCreateWorkspace } from "../../../../hooks/workspace";

const NewWorkspace = (props: any) => {
  const { setIsModalOpen } = props;

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleNewWorkspace = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const newWorkspace = await useCreateWorkspace({
        title,
        description,
        user_id: 1,
      });
      console.log(newWorkspace);
    } catch (error: any) {
      console.log(error)
    }
  };

  return (
    <Modal className={"bg-white px-10 py-12 relative rounded-md"}>
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
      <div className="flex flex-col mb-3">
        <label>Workspace title</label>
        <input
          type="text"
          className="border-solid border-[#CED8E7] focus:outline-none focus:border-[#0C66E4] hover:rounded-sm border-2 h-9 pl-2 my-1"
          placeholder="Taco's Co."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <span className="text-[12px]">
          This is the name of your company, team or organization
        </span>
      </div>
      <div className="flex flex-col">
        <label>
          Workspace description
          <span className="text-[12px] ml-1">Optional</span>
        </label>
        <textarea
          className="border-solid border-[#CED8E7] focus:outline-none focus:border-[#0C66E4] hover:rounded-sm border-2 h-32 pl-2 my-1 resize-none"
          placeholder="Our team organizes everything here."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <button
        className="w-full h-10 mt-5 rounded-sm text-white bg-[#0C66E4]"
        disabled={title ? false : true && description ? false : true}
        onClick={handleNewWorkspace}
      >
        Continue
      </button>
    </Modal>
  );
};

export default NewWorkspace;
