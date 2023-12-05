import React from "react";

const Main = (props: { children: React.ReactNode }) => {
  return <main className="main">{props.children}</main>;
};

export default Main;
