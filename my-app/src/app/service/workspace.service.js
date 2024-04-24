import { headerToken } from "../api/headerToken";

export const workSpaceService = async (workspace) => {
          // const res = await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces", {
          //   method: "POST",
          //   body: JSON.stringify(workspace),
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          // });
          // const data = await res.json();  
          // console.log('workspacefgfgdfd ',data)
          // return data;
          

          const header = await headerToken();
          const res = await fetch(
            "http://110.74.194.123:8989/api/todo/v1/workspaces",
            {
              method: "POST",
              body: JSON.stringify(workspace),
              // headers: {
              //   "Content-Type": "application/json",
              // },
              headers: header,
            }
          );
          const data = await res.json();
          console.log("testing ", data);
          return data;
        };

export const getWorkSpace = async () =>
{
  const header = await headerToken();
  
  const res = await fetch(
   "http://110.74.194.123:8989/api/todo/v1/workspaces",
    {
        headers: header
    }
  );
  return res.json();
         
}
export const deleteWorkSpace = async (id) =>
{
  console.log("deleteIDD",id)
  const header = await headerToken();
  const res = await fetch(
   `http://110.74.194.123:8989/api/todo/v1/workspaces/${id}`,
    {
        method: "DELETE",
        headers: header
    }
  );
  return res.json();  
}
export const updateWorkspace=async (id)=>{
  console.log("D",id)
  const header = await headerToken();
  const res = await fetch(
   `http://110.74.194.123:8989/api/todo/v1/workspaces/${id}`,
    {
        method: "DELETE",
        headers: header
    }
  );
  return res.json();  
}