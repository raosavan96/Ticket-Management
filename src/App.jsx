import React from "react";
import { Button } from "@/components/ui/button";
import Header from "./components/ui/application/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="bg-[#e7ecf4] h-[calc(100%-40px)] overflow-y-auto overflow-hidden">
        <Outlet />
      </div>
    </main>
  );
};

export default App;
