import { ChevronLeft } from "lucide-react"
import { useEffect, useState, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"

interface HeaderProps {
  title: string
  leftIcon?: ReactNode
  children?: ReactNode
  isBack?: boolean
  isTitleCenter?: boolean
}

const Header = ({ title, leftIcon, children, isBack = false, isTitleCenter = false }: HeaderProps) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleBack = () => {
    navigate(-1)
  }


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full max-w-[32rem] h-[50px] flex items-center justify-between px-6 py-4 border-gray-200 ${isScrolled ? 'bg-white' : 'bg-[#F5F5F54a]'}`}>
      <div className="flex-1 flex items-center gap-2">
        {isBack && (
          <div className="flex items-center gap-2">

            <button onClick={handleBack} className="text-gray-700">
              <ChevronLeft size={24} />
            </button>
          </div>
        )}

        {/* title */}
        <div className={`flex items-center gap-2 ${isTitleCenter ? 'absolute left-1/2 -translate-x-1/2' : ''}`}>
          {leftIcon && <span className="text-xl">{leftIcon}</span>}
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {children}
      </div>

    </header>
  )
}

export default Header