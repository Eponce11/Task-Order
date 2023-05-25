

import Card from "../Card";

const List = () => {

    const cards = [0,0,0];


    return (
        <div className="w-56 bg-bgPurple h-full rounded-xl p-2 mr-3">
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
        </div>
        
    )
}

export default List;