import Button from "../components/common/Button";
import { generalRoutes } from "../lib/routes";

const Home = () => {
  return (
    <main className="">
      <div className="pt-16 pb-21">
        <div className="flex flex-col items-center justify-center">
          <h1 className="max-w-[660px] text-center font-semibold text-5xl leading-[56px] lg:text-6xl text-[#101828] lg:leading-[72px]">
            Organize Your Work, Simplify Your Life
          </h1>
          <p className="sm:text-xl text-lg max-w-[696px] text-center pt-6 pb-12 text-[#475467]">
            TaskMaster is the ultimate task management app designed to help you
            book time slots, assign tasks descriptions, edit existing tasks and
            delete tasks effortlessly.
          </p>
          <Button
            title="Get Started"
            href={generalRoutes.task}
            className="max-w-[256px]"
          />
        </div>
        <div className="flex items-center justify-center pt-20">
          <img
            src="/images/mockup.webp"
            alt="hero"
            className="md:w-[75%] sm:w-[85%] w-[90%]"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
