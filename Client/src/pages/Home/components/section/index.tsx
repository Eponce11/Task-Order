
import Card from "../card"
import Header from "../header"


const Section = (props:any) => {

    const { data, isWorkspace } = props;

    return (
        <section className="w-full py-4 flex flex-col border-b-2">
            { isWorkspace && <Header />}
            <div className="flex w-full">
            {
                data.map( (prop:any) => {
                    return (
                        <Card prop={prop}/>
                    )
                })
            }
            </div>
        </section>
    )
}


export default Section;