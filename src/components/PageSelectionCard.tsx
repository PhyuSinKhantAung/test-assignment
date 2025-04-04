import React from "react";

export const PageSelectionCard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="page-selection-card">{children}</div>;
};
