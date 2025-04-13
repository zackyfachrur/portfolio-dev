import { lazy } from "react"
const Hero = lazy(() => import("./Hero"))
import Portfolio from "./Portfolio"

export default function Project() {
    return (
        <>
            <Hero />
            <Portfolio />
        </>
    )
}