import { Card, Header } from "..";

const Section = (props: any) => {
  const { data, isWorkspace, isLastWorkspace, title } = props;

  return (
    <section
      className={`w-full py-4 flex flex-col ${
        !isLastWorkspace ? "border-b-2" : ""
      }`}
    >
      {isWorkspace && <Header title={title} workspaceId={data.id} />}
      <div className="flex w-full">
        {data.map((prop: any, idx: number) => {
          return <Card prop={prop} key={idx} />;
        })}
      </div>
    </section>
  );
};

export default Section;
