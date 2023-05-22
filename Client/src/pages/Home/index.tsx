
import { Navbar } from "../../components";
import Section from "./components/section";


const Home = () => {


    return (
        <div className="h-full w-full bg-bgPurple flex flex-col">
            <Navbar />
            <div className="flex-1 px-52">
                <Section/>
            </div>
        </div>
    )
}

export default Home;