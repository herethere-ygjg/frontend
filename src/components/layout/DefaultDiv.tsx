import type { ReactNode } from "react";

interface DefaultDivProps {
  children: ReactNode
  isBackgroundColor?: boolean
}


const DefaultDiv = ({children , isBackgroundColor = false} : DefaultDivProps) =>{
    return(
        <div 
            className={`w-full max-w-[32rem] mx-auto h-[100vh]`}
            style={{
                background: isBackgroundColor ? 
                "linear-gradient(180deg, #FEFEFE 16%, #a8e5d1a0 63%, #50cca377 93%, #10b9816b 100%)" : "auto",
            }}
        >
            {children}
        </div>
    )
}

export default DefaultDiv;