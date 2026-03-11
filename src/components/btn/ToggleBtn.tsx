import { useState } from "react"

interface ToggleChipProps {
  label: string
  isSetActive?: boolean
  onChange?: (isActive: boolean) => void
}

const ToggleBtn = ({
  label,
  isSetActive = false,
  onChange,
}: ToggleChipProps) => {
  const [isActive, setisActive] = useState(isSetActive) // 클릭시 값 변화 변수

  const handleToggle = () => {
    // 체인지 값
    const next = !isActive
    // 적용
    setisActive(next)
    onChange?.(next)
  }

  return (
    <button
      onClick={handleToggle}
      className={`
        px-4 py-2 rounded-full text-sm font-medium 
        ${isActive
          ? "bg-[#10B981] text-white"
          : "border-1 border-gray-300 text-gray-600 bg-white"}
      `}
    >
      {label}
    </button>
  )
}

export default ToggleBtn