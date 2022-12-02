import { Header } from "../Header";
import { PageIndicator } from "../PageIndicator";
import { motion, AnimatePresence } from "framer-motion"

export const Layout = ({ children, router }: any) => {
    return (
        <div className=''>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={router.asPath}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}