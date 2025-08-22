import HomeLeft from "@/components/HomePage/HomeLeft";
import HomeRight from "@/components/HomePage/HomeRight";
import Sidebar from "@/components/Sidebar";


export default function HomePage() {
  return (
    <div className="flex w-full h-screen">
      <aside>
 <Sidebar />
      </aside>
     

     <main className="flex flex-col lg:flex-row w-full h-full ">
       <HomeLeft/>
       <HomeRight/>
      </main>
   
    </div>
  );
}
