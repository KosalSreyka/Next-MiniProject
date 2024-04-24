
import React from "react";
import signUpAction from "@/actions/sign-up";

const RegisterComponent = () => {
  return (
    <div>
      <div class="h-full bg-gray-400 dark:bg-gray-900">
        <div class="mx-auto">
          <div class="flex justify-center px-6 py-12">
            <div class="w-full xl:w-3/4 lg:w-11/12 flex">


              <div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
              <img src="../assets/icons/logo.svg" alt="" className="mb-5" />
                <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" action={signUpAction}>
                  <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        forhtml="firstName"
                      >
                        First Name :
                      </label>
                      <input
                        class="w-[300px] px-3 py-2 text-sm leading-tight text-gray-700 bg-neutral-100 dark:text-white border border-transparent rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="md:ml-2">
                      <label
                        class="block mb-2 ml-10 text-sm font-bold text-gray-700 dark:text-white"
                        forhtml="lastName"
                      >
                        Last Name :
                      </label>
                      <input
                        class="w-[300px] px-3 ml-10 py-2 text-sm leading-tight text-gray-700 bg-neutral-100 dark:text-white border border-transparent rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        forhtml="email"
                      >
                        Email :
                      </label>
                      <input
                        class="w-[300px] px-3 py-2 text-sm leading-tight text-gray-700 bg-neutral-100 dark:text-white border border-transparent rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        name="email"
                        type="text"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div class="md:ml-2">
                      <label
                        class="block mb-2 ml-10 text-sm font-bold text-gray-700 dark:text-white"
                        forhtml="moblie"
                      >
                        Gender :
                      </label>
                      <input
                        class="w-[300px] px-3 ml-10 py-2 text-sm leading-tight text-gray-700 bg-neutral-100 dark:text-white border border-transparent rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        name="gender"
                        type="text"
                        placeholder="Gender"
                      />
                    </div>
                  </div>
                 

                  <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        forhtml="firstName"
                      >
                        Password :
                      </label>
                      <input
                        class="w-[300px] px-3 py-2 text-sm leading-tight text-gray-700 bg-neutral-100 dark:text-white border border-transparent rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        name="password"
                        type="password"
                        placeholder="xxxxxxxxxxxxx"
                      />
                    </div>
                    <div class="md:ml-2">
                      <label
                        class="block mb-2 ml-10 text-sm font-bold text-gray-700 dark:text-white"
                        forhtml="lastName"
                      >
                       Comfirm Password :
                      </label>
                      <input
                        class="w-[300px] px-3 ml-10 py-2 text-sm leading-tight text-gray-700 bg-neutral-100 dark:text-white border border-transparent rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        name="cmpassword"
                        type="password"
                        placeholder="xxxxxxxxxxxxx"
                      />
                    </div>
                  </div>
                 
                    <button
                      class="w-[100px] px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Sign Up
                    </button>
           
                 
                </form>
              </div>
              <div
                class="w-full h-auto mt-20 ml-32 bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
               
              >
                    <img src="../assets/icons/sign-up.svg" alt="" className="mx-auto " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
