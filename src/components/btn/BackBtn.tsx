import { IoChevronBack } from "react-icons/io5";

const BackCircleBtn = ({
    onClick,
    type = "button",
    className = "",
}: {
    onClick?: () => void,
    type?: "button" | "submit" | "reset",
    className?: string
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            aria-label="뒤로가기"
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#2F8F64] ${className}`}
        >
            <IoChevronBack className="text-[1.35rem] text-white" />
        </button>
    );
};

export default BackCircleBtn;
