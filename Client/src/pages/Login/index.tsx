
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import InputTextField from "../../components/InputTextField"


const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error] = useState<boolean>(false);

    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex justify-center items-center bg-bgPurple">
            <div className="flex flex-col items-center border p-6 relative w-[400px] bg-white drop-shadow-2xl rounded">
                <h1 className="text-[48px] text-center border-b-2 w-full pb-3 mb-2">Login</h1>
                <span className="text-[red] absolute top-[117px]">{error ? 'Error' : ''}</span>
                <InputTextField label="Email" data={email} setData={setEmail}/>
                <InputTextField label="Password" data={password} setData={setPassword}/>
                <div className="w-full text-end mt-2">
                    <a 
                        className="decoration-none cursor-pointer" 
                        onClick={ () => navigate('/register') }
                    >
                        Register
                    </a>
                </div>
                <button className="bg-primary text-[white] w-full p-2 mt-2 rounded">Login</button>
            </div>
        </div>
    )
}


export default Login;