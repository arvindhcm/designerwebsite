import { forwardRef, Children, cloneElement, isValidElement } from "react";
import { motion, useMotionValue } from "framer-motion";
import DockIcon from "./DockIcon.jsx";

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const Dock = forwardRef(
  (
    {
      className = "",
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity);
    // Fixed to the magnified size (plus the row's own padding) so hovering
    // never grows this box and reflows the page below it.
    const dockHeight = iconMagnification + 16;

    const renderChildren = () =>
      Children.map(children, (child) => {
        if (isValidElement(child) && child.type === DockIcon) {
          return cloneElement(child, {
            mouseX,
            size: iconSize,
            magnification: iconMagnification,
            distance: iconDistance,
          });
        }
        return child;
      });

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        style={{ height: dockHeight }}
        className={`mx-auto flex w-max items-center justify-center gap-2 rounded-2xl border border-border bg-surface/70 p-2 shadow-md backdrop-blur-md ${className}`}
      >
        {renderChildren()}
      </motion.div>
    );
  },
);

Dock.displayName = "Dock";

export default Dock;
