
import { BoardBK, HomeBK, TemplateBK } from "../../assets/svg"

const navLinks = [
    {
        text: "Boards",
        icon: BoardBK
    },
    {
        text: "Templates",
        icon: TemplateBK
    },
    {
        text: "Home",
        icon: HomeBK
    }
]

const templates = [
    {
        isTemplate: true,
        title: "Purple Template",
        style: "gradient-to-r from-primary to-secondary"
    },
    {
        isTemplate: true,
        title: "Purple Template",
        style: "gradient-to-r from-[blue] to-[green]"
    },
    {
        isTemplate: true,
        title: "Purple Template",
        style: "gradient-to-r from-[orange] to-[red]"
    },
    {
        isTemplate: true,
        title: "Purple Template",
        style: "gradient-to-r from-[black] to-[yellow]"
    },
]

export {
    navLinks,
    templates
}