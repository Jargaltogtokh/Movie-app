export const Header = () => {
  return (
    <div className="flex mt-0 justify-between p-6">
      <div className="flex gap-5">
        <img src="film (2).png" className="w-[20px] h-[20px]" alt="Logo" />
        <p className="italic font-bold mb-[10px] text-blue-600">Movie Z</p>
      </div>
      <div className="flex gap-5">
        <img
          src="search.png"
          className="w-[20px] h-[20px] border-2 rounded-md"
          alt="Search"
        />
        <img
          src="moon.png"
          className="w-[20px] h-[20px] border-2 rounded-md"
          alt="Theme Toggle"
        />
      </div>
    </div>
  );
};
