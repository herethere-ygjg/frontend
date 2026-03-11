import type { ReactNode } from "react"
import DefaultDiv from "./DefaultDiv"
import Footer from "./Footer"
import Header from "./Header"

interface DefaultMainProps {
  children: ReactNode
  leftIcon?: ReactNode
  rightSlot?: ReactNode
  className?: string
  
  title: string
  isBgColor?: boolean
  isTitleCenter?: boolean
  isBack?: boolean
}

const DefaultMain = ({
  children,
  leftIcon,
  rightSlot,
  className = "",
  title = "",
  isBgColor = false,
  isTitleCenter = false,
  isBack = false
}: DefaultMainProps) => {
  return (
    <DefaultDiv isBackgroundColor={isBgColor} className={className}>
      <Header title={title} leftIcon={leftIcon} isTitleCenter={isTitleCenter} isBack={isBack}>
        {rightSlot}
      </Header>
      
      <main className="flex-1">{children}</main>

      <Footer />
    </DefaultDiv>
  )
}

export default DefaultMain