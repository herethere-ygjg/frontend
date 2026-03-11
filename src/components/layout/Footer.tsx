import { useNavigate, useLocation } from "react-router-dom"
import { NAV_ITEMS } from "../../data/NavList"

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path: string) =>
    location.pathname.startsWith(path)

  return (
    <footer className="fixed bottom-0 left-0 w-full h-[80px] bg-white border-t border-gray-200 flex items-center justify-around">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon
        const active = isActive(item.path)

        if (item.center) {
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="absolute -top-8 left-1/2 -translate-x-1/2 w-[64px] h-[64px] rounded-3xl bg-[#0BB079] flex items-center justify-center shadow-lg text-white"
            >
              <Icon size={28} />
            </button>
          )
        }

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex items-center justify-center ${
              active ? "text-green-700" : "text-gray-400"
            }`}
          >
            <Icon size={24} />
          </button>
        )
      })}
    </footer>
  )
}

export default Footer