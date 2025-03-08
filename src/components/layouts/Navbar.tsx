import { Link, useLocation } from "react-router-dom";
import LogoIcon from "../icons/Logo.icon";
import PageWrapper from "./PageWapper";
import { generalRoutes } from "../../lib/routes";
import Button from "../common/Button";

const Navbar = () => {
  const location = useLocation();

  const isTaskRoute = location.pathname === generalRoutes.task;

  return (
    <div className="sticky top-0 z-10 w-full py-4 bg-white shadow-sm">
      <PageWrapper>
        <div className="flex items-center justify-between w-full">
          <Link to={generalRoutes.home}>
            <LogoIcon />
          </Link>
          {!isTaskRoute && (
            <Button
              title="My task"
              href={generalRoutes.task}
              className="w-[115px]"
            />
          )}
        </div>
      </PageWrapper>
    </div>
  );
};

export default Navbar;
