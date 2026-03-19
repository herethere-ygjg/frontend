const WhiteBtn = ({
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
            className={`w-full max-w py-2 px-3 rounded-[1rem] bg-white ${className}`}
        >
            <p className="text-[1rem] text-[#0A7451] font-medium">{text}</p>
        </button>
    )
}

export default WhiteBtn;