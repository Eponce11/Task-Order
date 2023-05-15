
import React from "react";
import InputTextFieldProps from "./interfaces"

const InputTextField = (props: InputTextFieldProps) => {

    const { label, data, setData } = props;

    return (
        <div className="relative w-full mt-[35px] bg-gray-500 rounded ">
            <input 
                type="text"
                className="relative w-full pt-[20px] px-[10px] pb-[10px] bg-transparent border-none outline-none text-[red] text-base tracking-wider z-10 peer-focus:translate-x-0 peer"
                onChange={ (e:React.ChangeEvent<HTMLInputElement>) => { setData(e.target.value) }}
                value={data}
                required
            />
            <span className="absolute left-0 pt-[15px] px-[10px] pb-[10px] text-base pointer-events-none tracking-wide duration-500
                    peer-focus:translate-x-0 peer-focus:translate-y-[-12px] peer-focus:text-xs
                    peer-valid:translate-x-0 peer-valid:translate-y-[-12px] peer-valid:text-xs"
            >
                { label }
            </span>
        </div>
    )
}


export default InputTextField;