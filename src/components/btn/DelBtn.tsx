import type { InputHTMLAttributes } from "react"
import { Check } from "lucide-react"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}
const DelBtn = ({ label, ...props }: CheckboxProps) => {
    return (

        <label className="flex items-center cursor-pointer group">
            <input
                type="checkbox"
                className="hidden"
                {...props}
            />

            <div className="w-5 h-5 border border-[#adadad] rounded flex items-center justify-center group-has-[input:checked]:bg-red-500 group-has-[input:checked]:border-red-500">
                <Check className="w-3 h-3 text-white opacity-0 group-has-[input:checked]:opacity-100" />
            </div>
        </label>
    )
}

export default DelBtn;