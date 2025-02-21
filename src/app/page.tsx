import Search from "@/components/Search";
import { Main } from "@/widgets/Main";
import Sidebar from "@/widgets/Sidebar";

export default function Home() {
  return (
    <div className="flex gap-10 p-6">
      <div className="space-y-6 w-[375px]">
        <Search />
        <Sidebar />
      </div>
      <Main />
    </div>
  );
}
