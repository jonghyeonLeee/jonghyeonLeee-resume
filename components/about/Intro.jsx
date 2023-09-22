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
                다양한 웹 프론트엔드 프로젝트에서 중요한 역할을 수행한 개발자로, 최근 프로젝트에서는 Typescript 도입과 CI/CD 프로세스 개선을 통해 개발 효율과 안정성을 향상시켰습니다.
                또한, 코딩 컨벤션을 강화하고 Sentry와 react-hook-form을 도입하여 문제를 신속히 대응합니다.
                이전 프로젝트에서는 안정성 향상과 프론트엔드 최적화를 통해 사용자 경험을 개선했습니다.
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
