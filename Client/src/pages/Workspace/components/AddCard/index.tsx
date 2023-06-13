
import { CancelBK, AddBK } from "../../../../assets/svg";

const AddCard = (props:any) => {

    const { addingCard, setAddingCard } = props;

    return (
        <div
            className="w-full h-10 absolute bottom-0 left-0 rounded-b-xl p-2"
            onClick={ () => {
                if (!addingCard) setAddingCard(!addingCard);
            }}
        >
            {
                addingCard ?
                    <div className="absolute flex items-center bottom-2">
                        <button className="bg-[#0C66E4] text-white text-sm py-2 px-3 rounded-md mr-2">Add List</button>
                        <img
                            src={CancelBK}
                            className="cursor-pointer h-7 aspect-square"
                            onClick={ () => setAddingCard(!addingCard) }
                        />
                    </div>
                        :
                    <div className="flex items-center w-full h-full py-1 px-2 hover:bg-hoverGrey cursor-pointer rounded-md">
                        <img src={AddBK} alt="" className="h-4 aspect-square mr-1"/>
                        <span>Add a Card</span>
                    </div>
            }
        </div>
    )
}

export default AddCard;