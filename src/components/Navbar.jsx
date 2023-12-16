
import { Link } from "react-router-dom";
import logo from "../assets/icons/LogoSombre.svg";
const Navbar = () => {
    
  return (
    <>
      <Link to={'/home'}>
        {" "}
        <img src={logo} alt="" className="p-10 w-[200px]" />
      </Link>
    </>
  );
}

export default Navbar