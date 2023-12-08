import Logo from "../../../assets/Logonetflix.png";

const SignUp = () => {
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
            Sign up
          </h2>
          <div
            className="
							flex
							flex-col
							gap-4"
          >
            <div className="relative flex flex-col gap-4">
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="
					rounded-md
					px-6
					py-4
					text-base
					text-white
					bg-neutral-700
					focus:outline-none
					"
              />
              <input
                id="email"
                type="text"
                placeholder="Email"
                className="
					rounded-md
					px-6
					py-4
					text-base
					text-white
					bg-neutral-700
					focus:outline-none
					"
              />
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="
					rounded-md
					px-6
					py-4
					text-base
					text-white
					bg-neutral-700
					focus:outline-none
					"
              />

              <button
                className="
				text-white
				text-xl
				font-semibold
				py-3
				bg-[#e50914]
				rounded-md"
              >
                Sign up
              </button>

              <div
                className="
				flex
				items-center
				justify-between"
              >
                <div
                  className="
				text-neutral-400
					text-lg"
                >
                  Already have an account?
                  <span
                    className="
					text-white
					text-xl
					px-2
					hover:underline
					cursor-pointer"
                  >
                    Sign in Now
                  </span>
                  .
                </div>
                <p
                  className="
				text-neutral-400
				text-base
				hover:underline
				cursor-pointer"
                >
                  Need help?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
