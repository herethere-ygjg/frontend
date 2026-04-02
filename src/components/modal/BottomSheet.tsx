import { motion, AnimatePresence } from "framer-motion"
import type { ReactNode } from "react"

interface BottomSheetProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode,
  height? : string,
}

const BottomSheet = ({ isOpen, onClose, children , height}: BottomSheetProps) => {

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="z-[2000] fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* BottomSheet */}
          <motion.div
            className="z-[2000] fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50"
            style={{ height: height ? "60%": height }}

            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}

            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}

            onDragEnd={(_, info) => {
              if (info.offset.y > 150) {
                onClose()
              }
            }}
          >

            {/* Drag Handle */}
            <div className="flex justify-center py-3">
              <div className="w-10 h-1.5 bg-gray-300 rounded-full"/>
            </div>

            <div className="px-5 pb-6 overflow-auto h-full">
              {children}
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default BottomSheet;