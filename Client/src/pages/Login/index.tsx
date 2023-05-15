
import { useState } from "react"
import InputTextField from "../../components/InputTextField"


const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    return (
        <div className="w-full h-full flex justify-center items-center">

            <div className="flex flex-col items-center border p-8 relative">
                <h1 className="text-[48px] text-center">Task-Order</h1>
                <span className="text-[red] absolute top-16">Error</span>
                <InputTextField label="Email" data={email} setData={setEmail}/>
                <InputTextField label="Password" data={password} setData={setPassword}/>
                <div className="w-full text-end mt-2">
                    <a 
                        className="decoration-none" 
                        href="/register"
                    >
                        Register
                    </a>
                </div>
                <button className="">Register</button>
            </div>


        </div>
    )
}


export default Login;