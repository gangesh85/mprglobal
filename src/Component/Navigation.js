import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Basic</NavLink>
          </li>
          <li>
            <NavLink to="sorting">Sorting</NavLink>
          </li>
          <li>
            <NavLink to="filtering">Filtering</NavLink>
          </li>
          <li>
            <NavLink to="pagination">Pagination</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
