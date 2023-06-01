

import { AddWT, CancelBK } from "../../../../assets/svg"
import { useState } from 'react';

const AddList = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div 
            className={`w-64 rounded-xl items-center p-4
                ${!isOpen && "flex"} ${isOpen ? "h-28" : "h-12" } ${isOpen ? "bg-dimWhite" : "bg-lightPurple"}
                ${!isOpen && 'hover:bg-primary'} ${!isOpen && 'cursor-pointer'}
            `}
            onClick={ () => {
                if (!isOpen) setIsOpen(!isOpen);
            } }
        >
            {
                isOpen ? 
                    <>
                        <input 
                            type="text"
                            placeholder="Enter list title..."
                            className="w-full border-[#388BFF] outline-none border-2 px-2 py-1"
                        />
                        <div className="mt-2 flex items-center">
                            <button className="bg-[#0C66E4] text-white text-sm py-2 px-3 rounded-md mr-2">Add List</button>
                            <img
                                src={CancelBK}
                                className="cursor-pointer h-7 aspect-square"
                                onClick={ () => setIsOpen(!isOpen) }
                            />
                        </div>
                    </>
                        :
                    <>
                        <img src={AddWT} alt="" className="h-4 aspect-square"/>
                        <span className="text-white text-sm">Add another list</span>
                    </>
            }
        </div>
    )
}

export default AddList