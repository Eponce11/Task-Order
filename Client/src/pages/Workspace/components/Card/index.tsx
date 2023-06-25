

import { useState, useEffect, useRef } from "react";

const Card = (props:any) => {

    const { addingCard, setAddingCard } = props;
    const [title, setTitle] = useState<string>('');
    const inputCard = useRef<any>();

    useEffect( () => {
        if (addingCard) {
            inputCard.current.focus()
        }
    }, [inputCard])

    return (
        <>
            {
                addingCard ?
                    <input 
                        type="text" 
                        className="w-full rounded text-sm p-2 drop-shadow-md border-[1px] overflow-auto" 
                        ref={inputCard}
                        onBlur={ () =>  setAddingCard(!addingCard)}
                        value={title}
                        onChange={ (e) => setTitle(e.target.value)}
                    />
                        :
                    <li className="w-full bg-white rounded mb-2 text-sm p-2 drop-shadow-md border-[1px]">
                        <div className="w-1/6 h-2 bg-[green] rounded-lg mb-1" />
                        <span className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                    </li>
            }
        </>
    )
}


export default Card;