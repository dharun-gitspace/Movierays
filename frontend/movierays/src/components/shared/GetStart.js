const GettingStarted = () => {
  return (
    <section className="bg-transparent">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center">
          <h2 className="figtree-bold text-4xl font-bold text-white md:text-5xl">
            Watch Movies for a Change
          </h2>
          {/* You can set a fixed size like text-4xl to ensure it doesn't shrink */}
          <p className="hidden dm-sans-medium text-gray-100 sm:mt-9 sm:block">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action="#" className="sm:flex sm:gap-2">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border-gray-200 bg-white p-3 figtree-semibold text-gray-900 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>

            <button
              type="submit"
              className=" group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-yellow-300 px-5 py-3 text-black transition focus:outline-none focus:ring focus:ring-yellow-600 sm:mt-0 sm:w-auto"
            >
              <span className="text-base figtree-bold"> Get Started </span>

              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
