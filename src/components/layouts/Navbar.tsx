import { Link } from "react-router-dom";
import LogoIcon from "../icons/Logo.icon";
import PageWrapper from "./PageWapper";
import { generalRoutes } from "../../lib/routes";
import Button from "../common/Button";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 w-full py-4 bg-white shadow-sm">
      <PageWrapper>
        <div className="flex items-center justify-between w-full">
          <Link to={generalRoutes.home}>
            <LogoIcon />
          </Link>
          <Button title="Task" href={generalRoutes.task} className="w-[146px]" />
        </div>
      </PageWrapper>
    </div>
  );
};

export default Navbar;
