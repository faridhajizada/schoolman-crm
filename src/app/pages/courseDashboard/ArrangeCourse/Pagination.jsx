import React from "react";

const Pagination = ({ pageNumber, pageSize, setPageNumber, setPageSize }) => {
  return (
    <nav
      aria-label="Page navigation"
      className="d-flex justify-content-around mt-4"
    >
      <ul className="pagination">
        <li className="page-item previous">
          <a
            href="#"
            className="page-link"
            onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
          >
            <i className="previous"></i>
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link active">
            {pageNumber}
          </a>
        </li>
        <li className="page-item next">
          <a
            href="#"
            className="page-link"
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            <i className="next"></i>
          </a>
        </li>
      </ul>

      <div className="show-size">
        <select
          id="mySelect"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="form-select form-select-solid"
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </nav>
  );
};

export default Pagination;
