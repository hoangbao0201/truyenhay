import { ReactNode } from "react"


interface WraperLayoutProps {
    children: ReactNode
    className?: string
}
const WraperLayout = ({children, className} : WraperLayoutProps) => {

    return (
        <div className={`lg:max-w-6xl max-w-3xl w-full mx-auto px-4 ${className}`}>
            {children}
        </div>
    )
}


export { WraperLayout }