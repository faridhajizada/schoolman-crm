import React from "react";

const Filters = React.memo(({ filter, handleFilterChange }) => {
  return (
    <form className="mb-3">
      <div className="row">
        <div className="col-md-4 mb-3">
          <input type="text" className="form-control" name="name" placeholder="Имя клиента" value={filter.name} onChange={handleFilterChange} />
        </div>
        <div className="col-md-4 mb-3">
          <input type="text" className="form-control" name="phone" placeholder="Номер телефона" value={filter.phone} onChange={handleFilterChange} />
        </div>
        <div className="col-md-4 mb-3">
          <select className="form-control" name="status" value={filter.status} onChange={handleFilterChange}>
            <option value="">Все статусы</option>
            <option value="Активный">Активный</option>
            <option value="Черный список">Черный список</option>
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <input type="date" className="form-control" name="dateFrom" value={filter.dateFrom} onChange={handleFilterChange} />
        </div>
        <div className="col-md-4 mb-3">
          <input type="date" className="form-control" name="dateTo" value={filter.dateTo} onChange={handleFilterChange} />
        </div>
        <div className="col-md-4 mb-3">
          <select className="form-control" name="returns" value={filter.returns} onChange={handleFilterChange}>
            <option value="">Все возвраты</option>
            <option value="Да">Да</option>
            <option value="Нет">Нет</option>
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <select className="form-control" name="gender" value={filter.gender} onChange={handleFilterChange}>
            <option value="">Пол</option>
            <option value="Мужчина">Мужчина</option>
            <option value="Женщина">Женщина</option>
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <input type="text" className="form-control" name="region" placeholder="Регион" value={filter.region} onChange={handleFilterChange} />
        </div>
      </div>
    </form>
  );
});

export default Filters;