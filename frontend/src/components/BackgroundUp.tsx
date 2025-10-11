import React from "react";

type BackgroundUpProps = React.HTMLAttributes<HTMLDivElement> & {
  width?: number | string;
  height?: number | string;
};

const BackgroundUp: React.FC<BackgroundUpProps> = ({
  children,
  style,
  width = "100%",
  height = 800,
  ...rest
}) => {
  const combinedStyle: React.CSSProperties = {
    background: "linear-gradient(180deg, #1A0945 0%, #000 100%)",
    // make full-bleed by default so it fills the viewport width
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    flexShrink: 0,
    position: "absolute",
    left: 0,
    top: 0,
    // place behind other content inside a relative parent
    zIndex: -1,
    pointerEvents: "none",
    // allow callers to override or extend styles
    ...style,
  };

  return (
    <div aria-hidden style={combinedStyle} {...rest}>
      {children}
    </div>
  );
};

export default BackgroundUp;
