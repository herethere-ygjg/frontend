import { Home, Map, ShoppingCart, Users, Folder } from "lucide-react"

export const NAV_ITEMS = [
  {
    path: "/home",
    icon: Home,
  },
  {
    path: "/map",
    icon: Map,
  },
  {
    path: "/shop",
    icon: ShoppingCart,
    center: true,
  },
  {
    path: "/follow",
    icon: Users,
  },
  {
    path: "/folders",
    icon: Folder,
  },
]