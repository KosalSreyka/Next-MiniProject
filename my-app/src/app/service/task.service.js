import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";
import { getServerSession } from "next-auth";

// get token from cookies
const session = await getServerSession(authOption);

export const getAllTaskService = async () => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/task/get-all-task-by-current-user?asc=false&desc=false&page=1&size=10`,
    {
        headers: header
    }
  );
  if(!res.ok){
    throw new Error("Fail to delete")
  }
  return res.json();
};
