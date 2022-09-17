import axios from "axios";
import React, { useState, useEffect } from "react";
import { API } from "./config";

const EnqList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/read`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="bg-dark-purple min-h-screen">
      <div className="p-5 flex md:justify-center">
        <div className=" overflow-auto rounded-lg shadow-lg md:block  bg-white">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  #
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  First Name
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Last Name
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Phone
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Email
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, key) => {
                return (
                  <tr className="border-b" key={key}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {key+1}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.fname}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.lname}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.phone}
                    </td>
                    <td className="text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.email}
                    </td>
                    <td className="text-sm  md:w-72 text-gray-900 font-light px-6 py-4">
                      {item.message}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EnqList;
