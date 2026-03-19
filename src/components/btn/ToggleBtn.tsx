import { useState } from "react"

interface ToggleChipProps {
  label: string
  isSetActive?: boolean
  isRadio?: boolean
  onChange?: (isActive: boolean) => void
}

const ToggleBtn = ({
  label,
  isSetActive = false,
  isRadio = false,
  onChange,
}: ToggleChipProps) => {

  // 기본 토글용 내부 상태
  const [isActive, setIsActive] = useState(isSetActive)

  // 실제 표시 상태
  const active = isRadio ? isSetActive : isActive

  const handleToggle = () => {

    if (isRadio) {
      // radio 모드 → 부모에게만 전달
      onChange?.(!isSetActive)
      return
    }

    // 기본 토글 모드
    const next = !isActive
    setIsActive(next)
    onChange?.(next)
  }

  return (
    <button
      onClick={handleToggle}
      className={`
        px-4 py-2 rounded-full text-sm font-medium
        ${
          active
            ? "bg-[#10B981] text-white"
            : "border border-gray-300 text-gray-600 bg-white"
        }
      `}
    >
      {label}
    </button>
  )
}

export default ToggleBtn