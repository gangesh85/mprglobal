import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios'
import { usePagination, useTable } from "react-table";
import { COLUMNS } from "./Columns";
import "./table.css";

export const TablePagination = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState("Loading..");

  useEffect(() => {
    axios
      .get("https://63553cf1da523ceadcfd4ca1.mockapi.io/api/v1/users")
      .then((res) => {
        setUsersData(res.data);
        setLoading(false);
      });
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => usersData, [usersData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 1 },
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;

  return (
    <div>
      <h2>{loading}</h2>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {"First"}
      </button>
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        Previous
      </button>

      <span>
        {""}
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{" "}
      </span>
      <span>
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(pageNumber);
          }}
          style={{ width: "40px" }}
        />
      </span>
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        Next
      </button>
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {"Last"}
      </button>
      <select
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        {[10, 25, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};
