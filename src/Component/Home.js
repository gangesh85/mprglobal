import React, { useState, useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState("Loading..");
  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => {
        setUsersData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setUsersData("Something went wrong..");
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h2>Home</h2>
      {loading}
      <table>
        <thead>
          <tr>
            <td>SN.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        {usersData.map((user) => {
          return (
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
