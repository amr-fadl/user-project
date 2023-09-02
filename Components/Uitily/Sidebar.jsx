"use client";

import React from "react";

const Sidebar = ({ children,className='' }) => {
  return (
      <div className={"parent-sidebar-filter "+className}>
        <div className="mt-4 sidebar-filter square">{children}</div>
      </div>
  );
};

export default Sidebar;
