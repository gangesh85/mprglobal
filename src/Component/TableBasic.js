import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios'
import { useTable } from "react-table";
import { COLUMNS } from "./Columns";
import './table.css'

export const TableBasics = () => {
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
  

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
    <h2>{loading}</h2>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
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
        {
            footerGroups.map(footerGroups => (
                <tr {...footerGroups.getFooterGroupProps()}>
                    {
                        footerGroups.headers.map(column => (
                            <td {...column.getFooterProps}>
                                {
                                    column.render('Footer')
                                }
                            </td>
                        ))
                    }
                </tr>
            ))
        }
      </tfoot>
    </table>
    </>
  );
};
