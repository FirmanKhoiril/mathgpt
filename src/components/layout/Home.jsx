import { HelloRobot, ProjectManagement, boyLearn } from "../../assets";
import { CExplore } from "../";
import { AiExplorer } from "../../constants/DummyData";

const Home = () => {
  return (
    <section className="home__section">
      <div className="home__image__projectmanagement">
        <img src={ProjectManagement} alt="Project Management" className="rotate-[-40deg] w-[50px] h-[50px] sm:w-[90px] sm:h-[90px]" />
      </div>
      <div className="w-[354px] sm:w-auto mx-auto pt-6">
        <h1 className="home__large__subtext">LEVEL UP YOUR MATH SKILL</h1>
      </div>
      <div className="home__large__text">
        <h1>
          BECOME <br /> A MATH MASTER <br /> WITH AI
        </h1>
      </div>
      <div className="flex flex-col  py-2 sm:pt-10 sm:pb-20 gap-2 w-full">
        <div className="home__card__explore">
          {/* Mapping Ai Solve, Ai Explainer and Ai Writer Card */}
          {AiExplorer.map((item) => (
            <CExplore key={item.name} {...item} />
          ))}
        </div>
        {/* Overflow Hello Robot Image */}
        <img src={HelloRobot} alt="Hello Robot" className=" static lg:bottom-36 z-10 sm:absolute w-[250px] lg:w-[440px] lg:h-[262px] h-[134px]" />
      </div>
      {/* Overflow Boy Learn in Home page section */}
      <img src={boyLearn} alt="Boy Learning Math" width={348} height={379} className="absolute z-10 sm:block hidden bottom-0 right-0" />
    </section>
  );
};

export default Home;
