import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "./hooks";
import InputTextField from "../../components/InputTextField";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogin = async (
    e: React.MouseEvent<HTMLElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      try {
        const user = await useLoginUser({ email, password });
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-bgPurple">
      <div className="flex flex-col items-center border p-6 relative w-[400px] bg-white drop-shadow-2xl rounded">
        <h1 className="text-[48px] text-center border-b-2 w-full pb-3 mb-2">
          Login
        </h1>
        <span className="text-[red] absolute top-[117px]">{error}</span>
        <InputTextField label="Email" data={email} setData={setEmail} />
        <InputTextField
          label="Password"
          data={password}
          setData={setPassword}
        />
        <div className="w-full text-end mt-2">
          <a
            className="decoration-none cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </a>
        </div>
        <button
          className="bg-secondary text-[white] w-full p-2 mt-2 rounded relative"
          onClick={handleLogin}
        >
          Login
          {isLoading && (
            <span className="bg-[red] h-3 aspect-square absolute right-5 top-3" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Login;
