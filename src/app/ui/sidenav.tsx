import Link from "next/link";
import {
  PowerIcon,
  WalletIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/outline";
import { inter, interBold } from "./fonts";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-stone-900 rounded-tr-3xl space-y-5">
      <h1
        className={`${interBold.className} text-4xl text-slate-100 my-8 mx-auto`}
      >
        Watt<span className="text-green-700">Saver</span>
      </h1>
      <Link href="/dashboard" className="flex gap-2 justify-center">
        <ChartBarSquareIcon className="w-10 fill-slate-100" />
        <h3 className={`${inter.className} text-slate-100 text-2xl`}>
          Dashboard
        </h3>
      </Link>
      <Link href="/dashboard/wallet" className="flex gap-2 justify-center">
        <WalletIcon className="w-10 fill-slate-100" />
        <h3 className={`${inter.className} text-slate-100 text-2xl`}>
          Carteira
        </h3>
      </Link>
      <div className="hidden h-auto w-full grow bg-stone-900 md:block"></div>
      <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md text-slate-100 bg-stone-900 p-3 text-sm font-medium hover:bg-gray-600 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <PowerIcon className="w-6" />
        <div className="hidden md:block">Sign Out</div>
      </button>
    </div>
  );
}
