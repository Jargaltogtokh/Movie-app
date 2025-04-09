import Image from "next/image";
import { MdOutlineLocalMovies } from "react-icons/md";

export const Footers = () => {
  return (
    <>
      <div className="h-[280px] w-[100%] bg-[#433BCA] mb-0 text-slate-50">
        <div className="h-[200px] w-[100%] p-6">
          <div className="flex gap-5">
            <img src="film.png" className="w-[20px] h-[20px]" />
            <p className="italic font-bold mb-[10px]"> Movie Z</p>
          </div>
          <p> © 2024 Movie Z. All Rights Reserved.</p>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2 mt-[20px] lg:grid-cols-3">
            <div> Contact information</div>
            <div> Follow us</div>
            <div className="flex">
              <img src="email.png" className="w-[20px] h-[20px]" />
              <div className="flex flex-col">
                <p> Email:</p>
                <p> support@movieZ.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <p> Facebook</p>
              <p> Instagram</p>
            </div>
            <div className="flex">
              <img src="contact.png" className="w-[20px] h-[20px]" />
              <div className="flex flex-col">
                <p> Phone:</p>
                <p> +976 (11) 123-4567</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <p> Twitter</p>
              <p> Youtube</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};
