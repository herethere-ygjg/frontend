const DefaultBtn = ({
    text = "",
    onClick,
    type = "button",
    className = "",
}: {
    text: string,
    onClick?: () => void,
    type?: "button" | "submit" | "reset",
    className?: string
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-full py-4 px-3 rounded-full bg-[#2F8F64] ${className}`}
        >
            <p className="text-[1rem] text-white font-medium">{text}</p>
        </button>
    )
}


export default DefaultBtn;