
import { Navbar } from "../../components";


const Home = () => {



    return (
        <div className="h-full w-full bg-bgPurple flex flex-col">
            <Navbar />
            <div className="flex-1">
                <div className="bg-[red] h-6 w-full"></div>
            </div>
        </div>
    )
}

export default Home;