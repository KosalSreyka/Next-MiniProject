import login from "@/app/(auth)/login/page";
import RegisterComponent from "@/app/(auth)/register/page";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import TodoCardComponent from "@/components/TodoCardComponent";

export default function Home() {
  return(<main>
     <login/>
     <TodoCardComponent/>
     <ListBoardComponentHeader/>
     <MonthlyStatisticsComponent/>
     
  </main>);
}
