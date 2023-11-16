import GoogleIcon from "@/assets/svgs/Google.svg?react";
import logoImg from "@/assets/imgs/joinLecture.png";

const Home = () => {
  return (
    <div>
      <GoogleIcon className="w-[50px] h-auto" />
      <img src={logoImg} />
      <h1 className="medium-12 text-boarlog-100">Home</h1>
    </div>
  );
};

export default Home;
