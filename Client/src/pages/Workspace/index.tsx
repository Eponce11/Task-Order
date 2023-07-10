import { useState, useEffect } from "react";
import { Navbar } from "../../components";
import { Sidebar, Header, List, AddList } from "./components";

const Workspace = () => {
  const [lists, setLists] = useState<any>([]);
  useEffect(() => {
    // call the board
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-secondary">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="p-3 flex-1 flex">
            {lists.map((list: any) => (
              <List />
            ))}
            <AddList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
