import axios from "axios";
import Cookies from "js-cookie";
import { useShoppingContext } from "../../../context/ShopCartContext";
// import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
async function Logout() {
  // const Navigate = useNavigate();
  // const { loggedOut } = useShoppingContext();
  const success = () => toast.success("Loggedout successfuly.");
  const failure = () => toast.error("Logout failed.");

  const refreshToken = Cookies.get('refreshToken');
  console.log("Refresh",refreshToken);
  
  try {
    const url = "/api/v1/auth/logout";
    const response = await axios.post(url, {
      refreshToken: refreshToken,
    });

    if (response.status === 200) {
      // User logged in successfully
      // loggedOut();
      success();
    } else {
      // User login failed
      failure();
    }

    // Navigate("/");
  } catch (error) {
    console.error("Error registering user:", error);
    failure();
  }
}

export default Logout;
