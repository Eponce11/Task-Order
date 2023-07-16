import { useState, useEffect } from "react";
import { Navbar } from "../../components";
import { Sidebar, Header, List, AddList } from "./components";
import { useGetOneBoard } from "../../hooks/board";

const Workspace = () => {
  const [board, setBoard] = useState<any>();
  const [lists, setLists] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Temporary Calling the First board
        const board = await useGetOneBoard(1);
        setBoard(board);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-secondary">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          {board && <Header title={board.title} />}
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
