


const Card = (props: any) => {

    const { prop } = props;


    return (
        <div className={`h-28 w-56 rounded mr-4 text-white relative bg-gradient-to-r from-primary to-secondary`}>
            {
                prop.isTemplate &&
                <div className="w-1/3 h-1/5 aspect-square bg-bgGrey mt-2 ml-2 flex items-center justify-center rounded opacity-75">
                    <p className="text-xs text-[black]">Template</p>
                </div>
            }
            <h3 className="text-xl mt-2 ml-2">{prop.title}</h3>
            {
                prop.isStarred &&
                <div className="bg-[red] w-5 aspect-square absolute right-2 bottom-2" />
            }
        </div>
    )
}


export default Card;