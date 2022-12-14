import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './Chef.css';
const API_URL = "https://example.com/api/v1/model?page=1&limit=10"

const Chef = () => {
  const [data, setData] = useState([{
    id: 1,
    title: "New",
    description: "Header"
  },
    {
      id: 2,
      title: "Amkkk",
      description: "Everyfaa"
    },
    {
      id: 3,
      title: "Chef",
      description: "Header"
    },
    {
      id: 4,
      title: "New",
      description: "Everyfaa"
    },
    {
      id: 5,
      title: "New",
      description: "Everyfaa"
    },
    {
      id: 6,
      title: "New",
      description: "Everyfaa"
    },
    {
      id: 7,
      title: "New",
      description: "Everyfaa"
    },
  ]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [canPreviousPage, setCanPreviousPage] = useState(false);
  const [canNextPage, setCanNextPage] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  function previousPage() {
    //TODO
    setPage((c) => c - 1)
  }

  function nextPage() {
    //TODO
    setPage((c) => c + 1)
  }

  useEffect(() => {
    //TODO
    //Call Axios
    // try {
    // let response = axios.get(API_URL)
    // setData(response)
    // }
  }, [data]);

  return (
    <div>
      <table>
        <thead>
          <tr>

            <td>ID</td>
            <td>title</td>
            <td>description</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>Page{" "}{page} of {pageCount}</span>
        <select value={limit} onChange={(e) => { setLimit(Number(e.target.value)); }}>
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={previousPage} disabled={!canPreviousPage}>
          &#x02190;
        </button>
        <button onClick={nextPage} disabled={!canNextPage}>
          &#x02192;
        </button>
      </div>
    </div>
  );
};

// const Chef = () => (
//   <div>
//     Chef
//   </div>
// );

export default Chef;
