"use server"
import { signUpService } from "@/app/service/auth.service";
import { redirect } from "next/navigation";
const signUpAction = async (userInfo) => {
  
  // define structure object
  const newUserInfo = {
    firstname: userInfo.get("firstName"),
    lastname: userInfo.get("lastName"),
    gender: userInfo.get("gender"),
    password: userInfo.get("password"),
    email: userInfo.get("email"),
  };
  console.log("user signup", newUserInfo);

  // // calling next auth service and passing " newUseInfo "
  const res = await signUpService(newUserInfo);
  console.log("res :", res);
  // checking is login success nor not
  if (res) {
    redirect("/login");
  }
};

export default signUpAction;
