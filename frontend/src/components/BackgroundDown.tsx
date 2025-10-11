import React from "react";

type BackgroundDownProps = React.HTMLAttributes<HTMLDivElement> & {
  width?: number | string;
  height?: number | string;
};

const BackgroundDown: React.FC<BackgroundDownProps> = ({
  children,
  style,
  width = "100%",
  height = 640,
  ...rest
}) => {
  const combinedStyle: React.CSSProperties = {
    background: "linear-gradient(180deg, #000 0%, #1A0945 100%)",
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    flexShrink: 0,
    position: "absolute",
    left: 0,
    bottom: 0,
    zIndex: -1,
    pointerEvents: "none",
    ...style,
  };

  return (
    <div aria-hidden style={combinedStyle} {...rest}>
      {children}
    </div>
  );
};

export default BackgroundDown;
