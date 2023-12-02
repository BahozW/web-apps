import { ReactNode } from "react";
import DashboardNav from "@/components/navbar/DashboardNav";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex">
      <div className="flex justify-start ">
        <div className="flex flex-col justify-start bg-green-100 min-w-[200px]">
          <DashboardNav 
            route="clients" 
            title="Clients" 
            bgColor="bg-blue-500" 
          />
          <DashboardNav
            route="workoutprograms"
            title="Programs & Exercises"
            bgColor="bg-amber-500"
          />
        </div>
      </div>
      {children}
    </main>
  );
}