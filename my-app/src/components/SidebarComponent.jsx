import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import { getWorkSpace } from "@/app/service/workspace.service";
import ListBoardComponentHeader from "./ListBoardComponentHeader";
import Link from "next/link";
 const SidebarComponent=async () => {
  const workspace = await getWorkSpace();
  console.log("TETETETEET: ",workspace)
  var i=0;
  return (
    <div className="pl-10 mt-6 h-screen">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray  font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* each workspace */}
      
          {workspace.data.map((data)=>(
            
          <div className="flex items-center  mt-5 w-full"> 
          <span className="text-white ">{i++}</span>
          <div className={`rounded-full w-4 h-4 bg-${
  i === 1 ? 'workingOn' : (i === 2 ? 'gray' : (i === 3 ? 'pink-600' : 'todo'))
}`}></div>
        
        <div className="flex justify-between w-full pl-3">
            <Link href={<ListBoardComponentHeader/>}>{data.workspaceName}</Link>
            <EditDeleteDropDownComponent  id={data.workSpaceId}/>
          </div>
      </div>
          ))}
         

      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
      </div>

      {/* each favorite workspace */}
      <div className="flex items-center mt-5 w-full">
        <div className="rounded-full w-4 h-4 bg-workingOn"></div>
        <div className="flex justify-between w-full pl-3">
         <p>HRD Design</p>
          
        </div>
      </div>
    </div>
  );
}
export default SidebarComponent
