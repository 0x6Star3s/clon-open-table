import axios from "axios";
import { deleteCookie } from "cookies-next";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";

const useAuth = () => {
  const { data, error, loading, setAuthState } = useContext(
    AuthenticationContext
  );

  const signin = async (
    { email, password }: { email: string; password: string },
    handleClose: () => void
  ) => {
    setAuthState(priv => ({
      ...priv,
      loading: true,
    }));
    try {
      console.log("asdasd");
      const res = await axios.post("http://localhost:3000/api/auth/signin", {
        email,
        password,
      });
      setAuthState(priv => ({
        ...priv,
        data: res.data,
        loading: false,
      }));
      console.log(res);
      //   handleClose();
    } catch (err: any) {
      setAuthState(priv => ({
        ...priv,
        error: err.response.data.errorMessage,
        loading: false,
      }));
    }
  };
  const signup = async (
    {
      email,
      password,
      firstName,
      lastName,
      city,
      phone,
    }: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      city: string;
      phone: string;
    },
    handleClose: () => void
  ) => {
    setAuthState(priv => ({
      ...priv,
      loading: true,
    }));
    try {
      const res = await axios.post("http://localhost:3000/api/auth/signup", {
        email,
        password,
        firstName,
        lastName,
        city,
        phone,
      });
      setAuthState(priv => ({
        ...priv,
        data: res.data,
        loading: false,
      }));
      //   handleClose();
    } catch (err: any) {
      setAuthState(priv => ({
        ...priv,
        error: err.response.data.errorMessage,
        loading: false,
      }));
    }
  };

  const signout = () => {
    deleteCookie("jwt");

    setAuthState({
      data: null,
      error: null,
      loading: false,
    });
  };

  return {
    signin,
    signup,
    signout,
  };
};
export default useAuth;
