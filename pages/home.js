import dynamic from "next/dynamic";
import Seo from "../components/seo/Seo";
import Intro from "../components/about/Intro";
import SidebarInfo from "../components/about/SidebarInfo";
import HeaderNavigation from "../components/header/HeaderNavigation";
import Header from "../components/header/Header";
import Service from "../components/service/Service";
import Brand from "../components/brand/Brand";
import Footer from "../components/footer/Footer";
import ResumeCardTwo from "../components/Resume/ResumeCardTwo";
import LineItem from "../components/Resume/LineItem";
import Tag from "../components/tag/Tag";

const index = () => {
  return (
    <section className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed dark:bg-homeTwoBg-dark  md:pb-16 w-full">
      <Seo pageTitle="Home" />
      {/* End Head for Seo */}

      <Header />
      {/* End header */}

      <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
        <div className="col-span-12 lg:col-span-4  lg:h-screen lg:sticky top-44">
          <SidebarInfo />
        </div>
        {/* profile sidebar */}

        <div className="col-span-12 lg:col-span-8 ">
          {/*<HeaderNavigation />*/}

          <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
            <div data-aos="fade">
              <Intro />
              {/* End about descriptions */}

              {/*<section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">*/}
              {/*  <h3 className="text-[35px] dark:text-white font-medium pb-5">*/}
              {/*    What I do!*/}
              {/*  </h3>*/}
              {/*  <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">*/}
              {/*    <Service />*/}
              {/*  </div>*/}
              {/*</section>*/}
              {/* service provide end */}

              {/*<section className="px-2 sm:px-5 md:px-10 lg:px-14 mb-10">*/}
              {/*  <h3 className="text-[35px] dark:text-white font-medium pb-5">*/}
              {/*    My Client!*/}
              {/*  </h3>*/}
              {/*  <div className="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto   py-10 rounded-xl">*/}
              {/*    <Brand />*/}
              {/*  </div>*/}
              {/*</section>*/}
              {/* client info end */}

              <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
                <div className="py-12">
                  {/*Resume page title */}
                  <div className="grid grid-cols-1 gap-x-6 gap-y-6 mt-[30px]">
                    <ResumeCardTwo />
                    {/* resume items map */}
                  </div>
                </div>
              </div>
              {/* End .container for resume */}

              <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
                <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
                  <div className="col-span-1">
                    <h4 className="text-5xl dark:text-white font-medium mb-6">
                      Working Skills
                    </h4>
                    <LineItem />
                    {/* experience percent items */}
                  </div>
                  <div className="col-span-1">
                    <h4 className="text-5xl dark:text-white font-medium mb-8">
                      Knowledges
                    </h4>

                    <div className="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
                      <Tag />
                    </div>
                    {/* Knowledges items */}
                  </div>
                </div>
              </div>
              {/* End Skills */}
              <Footer />
              {/* Common Footer call here */}
            </div>
            {/* End fade */}
          </div>
          {/* End common-wrap */}
        </div>
      </div>
      {/* End main continer */}
    </section>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
