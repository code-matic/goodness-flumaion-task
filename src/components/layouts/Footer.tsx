import { Link } from "react-router-dom";
import { generalRoutes } from "../../lib/routes";
import PageWrapper from "./PageWapper";
import LogoIcon from "../icons/Logo.icon";

const Footer = () => {
  return (
    <div className="bg-[#0C111D] pb-12">
      <PageWrapper>
        <div className="flex justify-center w-full py-16">
          <Link to={generalRoutes.home}>
            <LogoIcon color="white" />
          </Link>
        </div>
        <div className="pt-8 border-t border-[#475467]">
            <p className="text-base text-center text-[#D0D5DD]">© 2025 Taskmaster. All rights reserved.</p>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Footer;
