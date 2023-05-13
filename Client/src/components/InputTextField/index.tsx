


const InputTextField = () => {


    return (
        <div className="relative w-full mt-[35px] bg-gray-500 rounded ">
            <input 
                type="text"
                className="relative w-full pt-[20px] px-[10px] pb-[10px] bg-transparent border-none outline-none text-[red] text-base tracking-wider z-10"
            />
            <span className="absolute left-0 pt-[15px] px-[10px] pb-[10px] text-base pointer-events-none tracking-wide">Email</span>
        </div>
    )
}


export default InputTextField