const Header = () => {
  return (
    <header className="header p-4 bg-transparent flex justify-center">
      <h1 className="flex text-4xl font-bold text-yellow-300 dm-sans-bold">
        MOVIERAYS
      </h1>
      <div className="absolute right-10">
        <button
          type="button"
          className="figtree-bold text-yellow-300 text-base hover:text-black border border-yellow-300 hover:bg-yellow-300  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-300 dark:focus:ring-yellow-900"
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
