import ROUTES from "../../../../../constants/routes";
import { Button } from "../../../../../generalComponents";
import { LogoLink } from "../../../../../layout/dashboardLayout/components/sidebar/components";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center p-4 pt-8 max-w-[1110px] mx-auto">
      <div>
        <LogoLink />
      </div>
      <ul className="sm:flex items-center gap-4 text-md font-medium text-secondary-text hidden ">
        <li className="cursor-pointer hover:text-primary-text">Home</li>
        <li className="cursor-pointer hover:text-primary-text">About</li>
        <li className="cursor-pointer hover:text-primary-text">Contact</li>
      </ul>

      <div>
        <Button label="Get Started" onClick={() => navigate(ROUTES.LOGIN)} />
      </div>
    </nav>
  );
};
