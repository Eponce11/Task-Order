
const Navbar = () => {


    return (
        <div className="w-full bg-primary text-white p-2 flex items-center mb-3">
            <h3 className="text-2xl mr-7">Task-Order</h3>
            <ul className="flex items-center">
                <li className="mr-4">Workspaces</li>
                <li className="mr-2">Starred</li>
            </ul>
        </div>
    )
}

export default Navbar;