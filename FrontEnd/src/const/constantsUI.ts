import { CSS } from "@nextui-org/react"

const whiteColor = "#FAFAFA"
const greenColor = "#078E85"
const darkerGreen = "#09BEB2"

type InputProps = {
    clearable: boolean,
    bordered: boolean,
    rounded: boolean,
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "error" | undefined
    size: "xs" | "sm" | "md" | "lg" | "xl" | undefined
    css: CSS
}
export const INPUTPROPS: InputProps = {
    clearable: true,
    bordered: true,
    rounded: true,
    // color: "primary",
    size: "lg",
    css: {
        borderWidth:"medium"
    }
}
export const CSSBUTTONBACK: CSS = {
    minWidth: "110px",
    marginRight: "5px",
    bg: whiteColor,
    border: darkerGreen,
    borderWidth: "1.5px",
    color: greenColor,
    borderStyle: "solid",
    boxShadow: "2px 2px 6px #ACACAC",
    borderRadius: "30px",
}
export const CSSBUTTONNEXT: CSS = {
    minWidth: "110px",
    marginRight: "5px",
    bg: darkerGreen,
    color: whiteColor,
    border: darkerGreen,
    borderWidth: "1.5px",
    borderStyle: "solid",
    boxShadow: "2px 2px 6px #ACACAC",
    borderRadius: "30px",
}
