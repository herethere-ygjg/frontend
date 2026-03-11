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
            className={`w-full max-w-[40vw] py-4 px-3 rounded-full bg-[#2F8F64] ${className}`}
        >
            <p className="text-[1.2rem] text-white font-semibold">{text}</p>
        </button>
    )
}


export default DefaultBtn;