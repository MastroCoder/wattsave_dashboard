import Image from "next/image";
import LoginForm from "./ui/login-form";
import { inter, interBold } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main>
      <div
        className={`${inter.className} flex h-screen flex-col md:flex-row md:overflow-hidden`}
      >
        <div className="w-full flex-none md:w-2/5 text-slate-100 ">
          <div className=" flex h-full flex-col px-3 py-4 md:px-2 bg-stone-900">
            <div className="mt-40 ml-20 mr-40 space-y-5">
              <h1 className={`${interBold.className} text-5xl`}>Watt<span className="text-green-700">Saver</span></h1>
              <h2 className="text-xl">
                Gerencie sua energia e poupe dinheiro e watts!
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full my-auto">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
