import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import { COLUMNS } from "./Columns";
import "./table.css";
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFilter } from "./ColumnFilter";


export const TableFiltering = () => {

  const [usersData, setUsersData] = useState([])
    const [loading, setLoading] = useState('Loading..')

    useEffect(() => {
        axios
        .get('https://63553cf1da523ceadcfd4ca1.mockapi.io/api/v1/users')
        .then(res => {
            setUsersData(res.data)
            setLoading(false)
        })
    },[])

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => usersData, [usersData]);

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter
    }
  }, [])

  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFilters, useGlobalFilter, useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state

  return (
    <>
    <h2>{loading}</h2>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <div>{column.canFilter ? column.render('Filter') : null}</div>
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <span> &#8593;</span>
                    ) : (
                      <span> &#8595;</span>
                    )
                  ) : (
                    ""
                  )}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((footerGroups) => (
          <tr {...footerGroups.getFooterGroupProps()}>
            {footerGroups.headers.map((column) => (
              <td {...column.getFooterProps}>{column.render("Footer")}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
    </>
  );
};
