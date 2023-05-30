
import { Board, Home, Template } from "../../assets/svg"

const navLinks = [
    {
        text: "Boards",
        icon: Board
    },
    {
        text: "Templates",
        icon: Template
    },
    {
        text: "Home",
        icon: Home
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