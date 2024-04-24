"use client"
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
export default async function login(userInfo) {
  const newUserInfo = {
    email: userInfo.get("email"),
    password: userInfo.get("password"),
  };

  // // calling next auth service and passing " newUseInfo "
  // const res = await signIn("credentials", {
  //   redirect: false,
  //   ...newUserInfo,
  // });

  const res = await signIn("credentials", {
    redirect: false,
    ...newUserInfo,
  });

  console.log("res login :", res);
  // checking is login success nor not

  if (res.ok) {
    redirect("/todo-list");
  }
  else redirect("/register");
}
