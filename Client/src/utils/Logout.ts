import axios from "axios";
import Cookies from "js-cookie";


export const logout = async (onLoggedOut: { (): void; (): void; }) => {

    const refreshToken = Cookies.get("refreshToken");
    const data = { refreshToken: refreshToken };
    try{
    const uri = "/api/v1/auth/logout";
    await axios.post(uri, data);
    Cookies.remove("refreshToken");
    Cookies.remove("accessToken");
    onLoggedOut();    
    }catch(err){
        console.log(err);
    }
  };