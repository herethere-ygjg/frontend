import type { InputHTMLAttributes  } from "react"

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const DefaultInput = ({ label, error, ...props }: DefaultInputProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label htmlFor={props.id} className="text-[15px] font-bold tracking-[-0.03em] text-[#666666]">
          {label}
        </label>
      )}

      <input className="w-full border-b border-[#d9d9d9] bg-transparent py-5 text-[15px] text-[#4a4a4a] outline-none transition placeholder:text-[#c5c5c5] focus:border-[#8f8f8f]"
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
