import {
  FaDribbble,
  FaFacebookF, FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Social = () => {
  const socialContent = [
    {
      id: 1,
      link: "https://github.com/jonghyeonLeee",
      icon: <FaGithub />,
      iconClass: "text-[#e14a84]",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/%EC%A2%85%ED%98%84-%EC%9D%B4-2562b3265/",
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
