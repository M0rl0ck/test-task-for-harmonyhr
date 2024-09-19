import React from "react";

export function RootContainer(children: React.ReactNode) {
  return <div className="max-w[1440px] min-h-screen">{children}</div>;
}
