

import Card from "../Card";
import { AddBK } from "../../../../assets/svg";

const List = () => {

    const cards = [0,0,0];


    return (
        <div className="w-64 bg-bgPurple h-full rounded-xl p-2 mr-3 relative">
            <input 
                type="text"
                value="To Do"
                className="w-full pl-2 bg-transparent outline-none mb-2"
            />
            <ul className="w-full">
                {
                    cards.map( (card:any) => {
                        return (
                            <Card />
                        )
                    })
                }
            </ul>
            <div className="w-full h-10 absolute bottom-0 left-0 rounded-b-xl p-2">
                <div className="flex items-center w-full h-full py-1 px-2 hover:bg-hoverGrey rounded-md">
                    <img src={AddBK} alt="" className="h-4 aspect-square mr-1"/>
                    <span>Add a Card</span>
                </div>
            </div>
        </div>
        
    )
}

export default List;