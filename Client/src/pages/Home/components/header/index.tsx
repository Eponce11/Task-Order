
const Header = () => {




    return (
        <div className="w-full h-10 flex justify-between items-center mb-4">
            <div className="h-full flex items-center">
                <div className="h-full aspect-square bg-blue-500 mr-2" />
                <span className="text-lg">WorkspaceName</span>
            </div>
            
            <ul className="flex items-center justify-center h-full">
                <li className="h-full flex items-center justify-center p-2 bg-dimGrey rounded text-sm mr-2 hover:bg-hoverGrey cursor-pointer">Settings</li>
                <li className="h-full flex items-center justify-center p-2 bg-secondary rounded border-2 text-sm text-white hover:bg-hoverPurple cursor-pointer">New Board</li>
            </ul>
        </div>
    )
}

export default Header;