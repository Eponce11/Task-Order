import { Card, Header } from "..";

const Section = (props: any) => {
  const { data, isWorkspace, isLastWorkspace, title } = props;

  return (
    <section
      className={`w-full py-4 flex flex-col ${
        !isLastWorkspace ? "border-b-2" : ""
      }`}
    >
      {isWorkspace && <Header title={title}/>}
      <div className="flex w-full">
        {data.map((prop: any) => {
          return <Card prop={prop} />;
        })}
      </div>
    </section>
  );
};

export default Section;
