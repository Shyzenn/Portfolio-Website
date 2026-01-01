import Link from "next/link";
import { IoArrowForward, IoBriefcaseOutline } from "react-icons/io5";

const RecentProjects = () => {
  return (
    <>
      <h1 className="text-xl font-semibold flex gap-2 items-center">
        <IoBriefcaseOutline className="text-[17px] text-gray-500" />
        Recent Projects
      </h1>
      <div className="mt-4">
        <div className="border w-60 rounded-md p-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm group">
          <Link href="/projects/macoleens_pharmacy" className="w-full">
            <h3 className="font-semibold">Macoleen&#39;s Pharmacy</h3>
            <p className="text-sm mt-2">Inventory Management System </p>
            <div className="bg-gray-100 dark:bg-black mt-4 p-1 px-2 rounded-sm flex w-fit items-center gap-2">
              <p className="text-xs">View</p>
              <IoArrowForward className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecentProjects;
