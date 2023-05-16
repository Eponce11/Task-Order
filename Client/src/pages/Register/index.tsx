
import { useState } from "react"
import { InputTextField } from "../../components"



const Register = () => {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');



    return (
        <div className="w-full h-full flex justify-center items-center">

            <div className="flex flex-col items-center border p-6 relative w-[400px]">
                <h1 className="text-[48px] text-center">Register</h1>
                <span className="text-[red] absolute top-24">Error</span>
                <InputTextField label="FirstName" data={firstName} setData={setFirstName}/>
                <InputTextField label="LastName" data={lastName} setData={setLastName}/>
                <InputTextField label="Email" data={email} setData={setEmail}/>
                <InputTextField label="Password" data={password} setData={setPassword}/>
                <InputTextField label="ConfirmPassword" data={confirmPassword} setData={setConfirmPassword}/>
                <div className="w-full text-end mt-2">
                    <a 
                        className="decoration-none" 
                        href="/register"
                    >
                        Register
                    </a>
                </div>
                <button className="bg-[green] w-full mt-2">Login</button>
            </div>
        </div>
    )
}


export default Register