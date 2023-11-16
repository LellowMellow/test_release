import Header from "./components/Header";
import LoginSection from "./components/LoginSection";

const Login = () => {
  return (
    <>
      <Header />
      <div className="flex flex-1 items-center justify-center h-screen">
        <LoginSection />
      </div>
    </>
  );
};

export default Login;
