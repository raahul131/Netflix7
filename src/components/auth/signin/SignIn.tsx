const SignIn = () => {
  return (
    <div className="relative flex flex-col gap-4">
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
        type="text"
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
        Sign in
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
          New to Netflix?
          <span
            className="
					text-white
					text-xl
					px-2
					hover:underline
					cursor-pointer"
          >
            Sign up Now
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
  );
};

export default SignIn;
