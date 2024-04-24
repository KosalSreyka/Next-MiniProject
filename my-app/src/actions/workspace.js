"use server";
import { deleteWorkSpace, workSpaceService } from "@/app/service/workspace.service";

const workspace = async (workspace) => {
  const newWorkSpaceName = {
    workspaceName: workspace.get("workspaceName"),
  };
  const data = await workSpaceService(newWorkSpaceName);
  console.log("data of wk :", data);
};

export const deleteWorkSpaceAction = async (id) => {
  console.log("serviceId",id)
  await deleteWorkSpace(id)
  
}

export default workspace;
