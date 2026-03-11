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
            className={`w-full max-w-[40vw] py-4 px-3 rounded-[1rem] bg-white ${className}`}
        >
            <p className="text-[1.2rem] text-[#0A7451] font-semibold">{text}</p>
        </button>
    )
}

export default WhiteBtn;