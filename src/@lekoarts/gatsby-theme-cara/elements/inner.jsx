/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Inner = ({ className, children, about }) => (
  <div
    className={className}
    sx={{
      overflow: `${about ? "scroll" : ""}`,
      width: [`full`, `full`, `full`, `full`, `full`, `2/3`],
      textAlign: `left`
    }}
  >
    {children}
  </div>
);

export default Inner;
