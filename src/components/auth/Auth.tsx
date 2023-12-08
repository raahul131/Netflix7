import Logo from "../../assets/Logonetflix.png";
import SignIn from "./signin/SignIn";
const Auth = () => {
  return (
    <div
      className="
        w-full
				min-h-screen
				h-full
				relative
				bg-fixed
				bg-no-repeat
				bg-cover bg-[url('./assets/hero.jpg')]"
    >
      <nav
        className="
					px-12
					md:px-16
					py-5
					bg-gradient-to-b from-black"
      >
        <img
          src={Logo}
          alt=""
          className="
						h-10
						md:h-12"
        />
      </nav>
      <div
        className="
					flex
					justify-center"
      >
        <div
          className="
					bg-black
					bg-opacity-70
					px-16
					py-16
					self-center
					mt-2
					lg:w-2/5
					lg:max-w-md
					rounded-md
					w-full"
        >
          <h2
            className="
						text-white
						text-4xl
						mb-10
						font-semibold
            text-center"
          >
            Sign in
          </h2>
          <div
            className="
							flex
							flex-col
							gap-4"
          >
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
