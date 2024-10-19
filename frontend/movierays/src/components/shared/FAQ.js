const FAQ = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-full max-w-2xl space-y-8 px-4 sm:px-6 md:px-8 -mt-10">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-yellow-300">
          Frequently Asked Questions
        </h1>

        {/* FAQ 1 */}
        <details className="group border-l-4 border-yellow-300 bg-gray-900 p-6 rounded-md shadow-md">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-white">
              What is Movirays?
            </h2>
            <span className="shrink-0 rounded-full bg-yellow-300 p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-yellow-300">
            Movirays is an on-demand video streaming platform offering a wide
            variety of movies and TV shows across genres. With subscription
            plans, users can enjoy unlimited streaming without ads.
          </p>
        </details>

        {/* FAQ 2 */}
        <details className="group border-l-4 border-yellow-300 bg-gray-900 p-6 rounded-md shadow-md">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-white">
              How can I subscribe to Movirays?
            </h2>
            <span className="shrink-0 rounded-full bg-yellow-300 p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-yellow-300">
            You can subscribe by creating an account on the Movirays website or
            app. Choose a plan that suits you, enter your payment details, and
            start streaming instantly!
          </p>
        </details>

        {/* FAQ 3 */}
        <details className="group border-l-4 border-yellow-300 bg-gray-900 p-6 rounded-md shadow-md">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-white">
              What devices are supported?
            </h2>
            <span className="shrink-0 rounded-full bg-yellow-300 p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-yellow-300">
            Movirays is available on smartphones, tablets, smart TVs, and web
            browsers. You can enjoy streaming on Android, iOS, Windows, macOS,
            and many other platforms.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
