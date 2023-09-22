const Tag = () => {
  const tagList = [
    "React",
    "TypeScript",
    "Web",
    "Recoil",
    "Nginx",
    "GCP(Cloud)",
    "Git",
    "C#",
    "HTML/CSS",
    "MS-SQL",
    "VueJS",
    "NextJS",
    "Sentry",
    "WebRTC",
    "GRPC",
  ];
  return (
    <>
      {tagList.map((tag, i) => (
        <button className="resume-btn text-[15px]" key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;
