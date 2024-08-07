const Main = ({ children }) => {
  return (
    <div className="ml-0 h-screen sm:ml-64 text-gray-500 bg-gray-100 p-4 sm:ml flex gap-2 flex-col lg:flex-row translate-all duratin-300 mt-14 dark:bg-gray-900">
      {children}
    </div>
  );
};

export default Main;
