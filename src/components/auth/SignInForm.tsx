import { useState } from "react";
import { useNavigate} from "react-router";
import {EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";


export default function SignInForm() {

  const navigation = useNavigate()
  const [showPassword, setShowPassword] = useState(false);



  const signInHandel = async () => {
    navigation("/dashbord")

  }

  return (
    <div className="flex flex-col flex-1">


      <div className="w-full max-w-md pt-10 mx-auto">
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign in!
            </p>
          </div>
          <div>
            <form>
              <div className="space-y-6">
                <div>
                  <Label>
                    Email <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input
                      placeholder="info@gmail.com"
                  />
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>
                <div>
                  <button
                      type={"button"}
                      onClick={() => signInHandel()}
                      className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
                    Sign In
                  </button>
                </div>
              </div>
            </form>

            {/*<div className="mt-5">*/}
            {/*  <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">*/}
            {/*    Don&apos;t have an account? {""}*/}
            {/*    <Link*/}
            {/*        to="/signup"*/}
            {/*        className="text-brand-500 hover:text-brand-600 dark:text-brand-400"*/}
            {/*    >*/}
            {/*      Sign Up*/}
            {/*    </Link>*/}
            {/*  </p>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
