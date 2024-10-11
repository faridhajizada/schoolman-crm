import React from "react";

const ClientList = React.memo(
  ({ filteredCustomers, currentPage, customersPerPage }) => {
    return (
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="bg-light">
            <tr className="fw-bold text-uppercase gs-0">
              <th className="min-w-50px">#</th>
              <th className="min-w-200px">ФИО</th>
              <th className="min-w-150px">Номер</th>
              <th className="min-w-100px">Статус</th>
              <th className="min-w-150px">Продажи в день регистрации</th>
              <th className="min-w-150px">Есть ли возвраты</th>
              <th className="min-w-150px">Дата регистрации</th>
              <th className="min-w-150px">Должность</th>
              <th className="min-w-150px">Отказ от демо</th>
              <th className="min-w-100px">Пол</th>
              <th className="min-w-100px">Область</th>
              <th className="text-end min-w-150px">Действия</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr key={customer.id}>
                <td>{(currentPage - 1) * customersPerPage + index + 1}</td>
                <td>{customer.name}</td>
                <td>{customer.number}</td>
                <td>{customer.status}</td>
                <td>
                  <span
                    className={`badge ${
                      customer.sales === "Нет продаж"
                        ? " badge badge-light-warning "
                        : "badge badge-light-success"
                    }`}
                  >
                    {customer.sales}
                  </span>
                </td>
                <td>{customer.returns}</td>
                <td>{customer.registrationDate}</td>
                <td>

                  <span className="badge badge-light-danger">
                    {customer.position}
                  </span>
                </td>
                <td className="badge badge-success">{customer.reject}</td>
                <td>{customer.gender}</td>
                <td>{customer.region}</td>
                <td className="d-flex">
                  <span className="badge badge-light-primary">Просмотр</span>

                  <span className="badge badge-light-info">Купон друга</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
);

export default ClientList;
