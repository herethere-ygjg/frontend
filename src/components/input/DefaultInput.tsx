import type { InputHTMLAttributes  } from "react"

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const DefaultInput = ({ label, error, ...props }: DefaultInputProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label className="text-[1rem] font-medium text-gray-700">
          {label}
        </label>
      )}

      <input className="w-full py-3 border-b border-[#E2E2E2] outline-none placeholder:text-[#B4B4B4] focus:border-gray-500 transition text-[0.9rem] text-[#1C1C1C]"
        {...props}
      />

      {error && (
        <span className="text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  )
}

export default DefaultInput