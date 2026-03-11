import type { InputHTMLAttributes } from "react"
import { Search } from "lucide-react"

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
}

const SearchInput = ({ placeholder = "폴더명 또는 장소 검색", ...props }: SearchInputProps) => {
  return (
    <div className="w-full h-[3rem] flex items-center gap-3 px-5 rounded-full border border-gray-200 bg-white">
      <Search size={20} className="text-gray-400" />

      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-[#B4B4B4]"
        {...props}
      />
    </div>
  )
}

export default SearchInput