
import Link from "next/link";
import login from "@/actions/login";
const LoginComponent = () => {
  // async function  login(userInfo)
  // {
  //   const router = useRouter();
  //   const newUserInfo = {
  //     email: userInfo.get("email")
  //     password: userInfo.get("password"),
  //   };

  //   // // calling next auth service and passing " newUseInfo "
  //   const res = await signIn("credentials", {
  //     redirect: false,
  //     ...newUserInfo,
  //   });
  //   console.log('res login :',res.ok)
  //   // checking is login success nor not

  //   if (res.ok) {
  //         router.push('/todo-list');

  //       }
  //   // else
  //   // return { error: "Invalid login credentials." };

  // }

  return (
    <div>
      <section class="bg-gray-100 min-h-screen flex box-border justify-center items-center">
        <div class=" flex max-w-3xl  items-center">
          <div class="md:w-1/2 px-12">
            <h2 class="flex font-bold  text-3xl -ml-40 text-[#002D74] mb-16">
              <img src="../assets/icons/logo.svg" alt="" />
            </h2>
            <h3 class=" text-[#002D74] text-2xl ">Login</h3>
            <form action={login} class="flex flex-col gap-4">
              <input
                class="p-2 mt-8 rounded border border-gray"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div class="relative">
                <input
                  class="p-2 rounded border w-full border-gray"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  id="togglePassword"
                  class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                  id="mama"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                </svg>
              </div>
              <button
                class="bg-neutral-500 text-black py-2 rounded-md bg-transparent hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                type="submit"
              >
                Login
              </button>

              <div class="mt-4 text-sm flex  container-mr">
                <p class="mr-1">Don't have an account?</p>
                <Link href="/register" className="text-blue-500 font-bold">
                  Register
                </Link>
              </div>
              <div class="inline-flex items-center justify-center w-full">
                <hr class="w-24 h-0.5 my-8  mr-2" />
                <span className="text-xs grid">Continue with</span>
                <hr class="w-24 h-0.5  my-8     ml-2" />
              </div>
              <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
                <svg
                  class="mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="25px"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Login with Google
              </button>
            </form>
          </div>
          <div class="md:block hidden w-1/2 mt-28">
            <img
              class="mx-36 rounded-md max-h-[1900px] h-auto"
              src="../assets/icons/login.svg"
              alt="login form image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginComponent;
