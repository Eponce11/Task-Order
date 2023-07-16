import { useState, useEffect } from "react";
import { Navbar } from "../../components";
import { Section, Sidebar } from "./components";
import { useGetAllWorkspaces } from "../../hooks/workspace";
import { templates } from "./constants";

const Home = () => {
  const [workspaces, setWorkspaces] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        // get the signed in users id
        const allWorkspaces = await useGetAllWorkspaces(1);
        setWorkspaces(allWorkspaces);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // const templates = [{title: "Title", isTemplate: true}, {title: "Title", isTemplate: true}];
  const starred = [
    {
      title: "Title",
      isStarred: true,
      style: "gradient-to-r from-primary to-secondary",
    },
    {
      title: "Title",
      isStarred: true,
      style: "gradient-to-r from-primary to-secondary",
    },
  ];
  /*
    const workspaces = [
        [{title: "Title", isStarred: false, style: "gradient-to-r from-primary to-secondary"}],
        [{title: "Title", isStarred: false, style: "gradient-to-r from-primary to-secondary"}]
    ];
    */

  /*
    <Section
                data={workspace}
                isWorkspace={true}
                isLastWorkspace={idx === workspaces.length - 1}
              />
    */
  return (
    <div className="h-full w-full bg-white flex flex-col relative overflow-hidden">
      <Navbar />
      <div className="flex-1 px-52 flex relative overflow-scroll mt-3">
        <Sidebar />
        <div className="w-full ml-4 overflow-y-scroll">
          <h3 className="text-xl">Templates</h3>
          <Section data={templates} />
          <h3 className="text-xl mt-2">Starred</h3>
          <Section data={starred} />
          <h3 className="text-xl mt-2">Workspaces</h3>
          {workspaces.length !== 0 &&
            workspaces.map((workspace: any, idx: number) => {
              return <div key={workspace.id}>Hello World</div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
