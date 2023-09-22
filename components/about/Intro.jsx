const Intro = () => {
  return (
    <>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-52">About Me</h2>
        {/* About page title */}

        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-gray-lite dark:text-color-910 leading-7">
                웹 개발 경력 6년차 개발자로 다양한 웹 어플리케이션을 개발하고 운영한 경헙이 있습니다.
                React, Typescript 등의 기술 스택을 통한 프론트 개발을, C#, nodeJS를 사용한 백엔드 개발 경험을 통해 원활한 협업 능력을 갖추었습니다.
                Sentry를 도입하여 에러를 실시간으로 관리하는 품질 개선을 위해 항상 고민하고 공부하고 있습니다.
                지속적인 기술 성장을 추구하며, 최근엔 Next.js를 통해 SEO, SSR, BFF 등등 같은 최신 웹 기술을 탐구하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End pt-12 */}
    </>
  );
};

export default Intro;
