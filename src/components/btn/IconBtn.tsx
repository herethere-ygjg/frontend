import React from "react"
import { Settings, Plus, MoreVertical, X } from "lucide-react"


type IconType = "setting" | "plus" | "more" | "close"

interface IconBtnProps {
  iconType: IconType
  size?: number
  onClick?: () => void
  className?: string
}

const iconMap = {
  setting: Settings,
  plus: Plus,
  more: MoreVertical,
  close : X
}

const IconBtn: React.FC<IconBtnProps> = ({
  iconType,
  size = 20,
  onClick,
  className = "",
}) => {
  const IconComponent = iconMap[iconType]

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <IconComponent size={size} />
    </button>
  )
}

export default IconBtn