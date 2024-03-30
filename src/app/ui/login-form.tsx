import { Button } from "./button";
import { inter } from "./fonts";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export default function LoginForm() {
  return (
    <form className="space-y-3 md:w-4/5 mx-auto shadow-2xl shadow-black rounded-lg">
      <div className="flex-1 rounded-lg bg-slate-950 px-6 pb-4 pt-8 text-slate-100 ">
        <h1 className={`${inter.className} mb-3 text-2xl`}>
          Login
        </h1>
        <div className="w-full">
          <div>
            <label 
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="emailInput">
                E-mail
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="emailInput"
                type="email"
                name="email"
                placeholder="Entre seu email"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label 
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="passwordInput">
              Senha
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="passwordInput"
                type="email"
                name="email"
                placeholder="Entre sua senha"
                required
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <LoginButton/>
        </div>
      </div>
    </form>
  );
}

function LoginButton(){
  return(
    <Button className="mt-4 w-full">
      Entrar <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}