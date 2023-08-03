import { ReactNode } from "react";

import cn from "clsx";

interface WrapLayoutProps {
    children: ReactNode
    className?: string;
}
const WrapLayout : React.FC<WrapLayoutProps> = ({children, className}) => {

    return (
        <div className={cn(className,"lg:max-w-6xl max-w-3xl w-full mx-auto px-4")}>
            {children}
        </div>
    )
}

export { WrapLayout }