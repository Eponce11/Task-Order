
const Sidebar = () => {




    return (
        <div className="w-64 flex-1">
            <ul className="w-full border-b-2">
                <li className="rounded p-2 hover:bg-hoverGrey cursor-pointer">Board</li>
                <li className="rounded p-2 hover:bg-hoverGrey cursor-pointer">Templates</li>
                <li className="rounded p-2 hover:bg-hoverGrey cursor-pointer">Home</li>
            </ul>
            <div className="w-full p-2 flex justify-between items-center">
                <h5>Workspaces</h5>
                <div className="bg-[green] h-3 aspect-square" />
            </div>
            <ul className="w-full">
                <li className="flex items-center p-3 rounded hover:bg-hoverGrey cursor-pointer">
                    <div className="bg-[green] h-6 aspect-square mr-2" />
                    <span>WorkspaceName</span>
                </li>
                <li className="flex items-center p-3 rounded hover:bg-hoverGrey cursor-pointer">
                    <div className="bg-[green] h-6 aspect-square mr-2" />
                    <span>WorkspaceName</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;