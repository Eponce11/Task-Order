import { useEffect } from "react";
import { Navbar } from "../../components";
import { Section, Sidebar } from "./components";
import { useGetAllWorkspaces } from "../../hooks/workspace";
import { templates } from "./constants";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setWorkspaces } from "../../app/slices/workspacesSlice";

const Home = () => {
  const workspaces = useAppSelector((state) => state.workspaces.workspaces);
  const isFetched = useAppSelector((state) => state.workspaces.isFetched);
  const signedInUserId = useAppSelector((state) => state.signedInUser.id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const allWorkspaces = await useGetAllWorkspaces(signedInUserId);
        dispatch(
          setWorkspaces({
            workspaces: allWorkspaces,
            isFetched: true,
          })
        );
      } catch (error: any) {
        console.log(error);
      }
    };
    if (!isFetched) fetchData();
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
              return (
                <Section
                  key={workspace.id}
                  data={workspace.boards}
                  title={workspace.title}
                  isWorkspace={true}
                  isLastWorkspace={idx === workspaces.length - 1}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
