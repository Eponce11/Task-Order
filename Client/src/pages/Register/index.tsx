
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { InputTextField } from "../../components"



const Register = () => {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const navigate = useNavigate();



    return (
        <div className="w-full h-full flex justify-center items-center bg-bgPurple">

            <div className="flex flex-col items-center border p-6 relative w-[400px] bg-white drop-shadow-2xl rounded">
                <h1 className="text-[48px] text-center border-b-2 w-full pb-3">Register</h1>
                <InputTextField label="FirstName" data={firstName} setData={setFirstName}/>
                <InputTextField label="LastName" data={lastName} setData={setLastName}/>
                <InputTextField label="Email" data={email} setData={setEmail}/>
                <InputTextField label="Password" data={password} setData={setPassword}/>
                <InputTextField label="ConfirmPassword" data={confirmPassword} setData={setConfirmPassword}/>
                <div className="w-full text-end mt-2">
                    <a 
                        className="decoration-none cursor-pointer" 
                        onClick={ () => navigate('/') }
                    >
                        Login
                    </a>
                </div>
                <button className="bg-primary text-[white] w-full p-2 mt-2 rounded">Register</button>
            </div>
        </div>
    )
}


export default Register