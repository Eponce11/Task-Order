import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputTextField } from "../../components";
import { useRegisterUser } from "./hooks";
import { registerUserDataErrors } from "./types";
import { useAppDispatch } from "../../app/hooks";
import { setSignedInUser } from "../../app/slices/signedInUserSlice";

const Register = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<registerUserDataErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRegister = async (e: React.MouseEvent<HTMLElement>): Promise<void> => {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      try {
        const user = await useRegisterUser({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          confirm_password: confirmPassword,
        });
        dispatch(setSignedInUser(user));
      } catch (err: any) {
        setErrors(err);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-bgPurple">
      <div className="flex flex-col items-center border p-6 relative w-[400px] bg-white drop-shadow-2xl rounded">
        <h1 className="text-[48px] text-center border-b-2 w-full pb-3">
          Register
        </h1>
        <InputTextField
          label="FirstName"
          data={firstName}
          setData={setFirstName}
          error={
            errors.hasOwnProperty("first_name") ? errors["first_name"] : null
          }
        />
        <InputTextField
          label="LastName"
          data={lastName}
          setData={setLastName}
          error={
            errors.hasOwnProperty("last_name") ? errors["last_name"] : null
          }
        />
        <InputTextField
          label="Email"
          data={email}
          setData={setEmail}
          error={errors.hasOwnProperty("email") ? errors["email"] : null}
        />
        <InputTextField
          label="Password"
          data={password}
          setData={setPassword}
          error={errors.hasOwnProperty("password") ? errors["password"] : null}
        />
        <InputTextField
          label="ConfirmPassword"
          data={confirmPassword}
          setData={setConfirmPassword}
          error={errors.hasOwnProperty("confirm_password")? errors["confirm_password"]: null}
        />
        <div className="w-full text-end mt-2">
          <a
            className="decoration-none cursor-pointer"
            onClick={() => navigate("/")}
          >
            Login
          </a>
        </div>
        <button
          className="bg-primary text-[white] w-full p-2 mt-2 rounded relative"
          onClick={handleRegister}
        >
          Register
          {isLoading && (
            <span className="bg-[red] h-3 aspect-square absolute right-5 top-3" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Register;
