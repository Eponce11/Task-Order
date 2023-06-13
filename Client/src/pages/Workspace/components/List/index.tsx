

import { useState, useEffect, useRef } from "react";
import { Card, AddCard } from "..";

const List = () => {

    const cards = [0,0,0,0,0,0,0,0,0];


    const [addingCard, setAddingCard] = useState<boolean>(false);
    const placeHolderBottom = useRef<any>();

    useEffect( () => {
        if (addingCard) {
            placeHolderBottom.current.scrollIntoView({behavior: "smooth"});
        }
    }, [addingCard])


    return (
        <div className="w-64 bg-dimWhite rounded-xl p-2 mr-3 relative">
            <input 
                type="text"
                value="To Do"
                className="w-full pl-2 bg-transparent outline-none mb-2 h-6 absolute"
            />
            <ul className=" overflow-auto scrollbar absolute top-10 bottom-14">
                {
                    cards.map( (card:any) => {
                        return (
                            <Card />
                        )
                    })
                }
                { addingCard && <Card addingCard={addingCard} setAddingCard={setAddingCard}/> }
                <div ref={placeHolderBottom}/>
            </ul>
            <AddCard addingCard={addingCard} setAddingCard={setAddingCard}/>
        </div>
        
    )
}

export default List;