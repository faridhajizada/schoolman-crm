import React from "react";

const ModalForm = ({
  newClient,
  handleInputChange,
  handleSubmit,
  setShowModal,
  modalRef,
}) => {
  return (
    <div>
      <div
        className="modal-backdrop-gray"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(128, 128, 128, 0.7)",
          zIndex: 999,
        }}
        onClick={() => setShowModal(false)}
      ></div>

      <div
        className="modal fade show"
        style={{
          display: "block",
          zIndex: 1000,
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          height: "70%",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
        }}
        ref={modalRef}
      >
        <div className="modal-header">
          <h5 className="modal-title">Добавить клиента</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowModal(false)}
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  Имя
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={newClient.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="number" className="form-label">
                  Номер телефона
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  name="number"
                  value={newClient.number}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="status" className="form-label">
                  Статус
                </label>
                <select
                  className="form-control"
                  id="status"
                  name="status"
                  value={newClient.status}
                  onChange={handleInputChange}
                >
                  <option value="">Выберите статус</option>
                  <option value="Активный">Активный</option>
                  <option value="Черный список">Черный список</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="registrationDate" className="form-label">
                  Дата регистрации
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="registrationDate"
                  name="registrationDate"
                  value={newClient.registrationDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="position" className="form-label">
                  Должность
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="position"
                  name="position"
                  value={newClient.position}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="reject" className="form-label">
                  Отказ от демо
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reject"
                  name="reject"
                  value={newClient.reject}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="gender" className="form-label">
                  Пол
                </label>
                <select
                  className="form-control"
                  id="gender"
                  name="gender"
                  value={newClient.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Выберите пол</option>
                  <option value="Мужчина">Мужчина</option>
                  <option value="Женщина">Женщина</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="region" className="form-label">
                  Регион
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="region"
                  name="region"
                  value={newClient.region}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="saleDayRegistation" className="form-label">
                  Продажи в день регистрации
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="saleDayRegistation"
                  name="saleDayRegistation"
                  value={newClient.saleDayRegistation}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="returns" className="form-label">
                  Есть ли возвраты
                </label>
                <select
                  className="form-control"
                  id="returns"
                  name="returns"
                  value={newClient.returns}
                  onChange={handleInputChange}
                >
                  <option value="">Выберите</option>
                  <option value="Да">Да</option>
                  <option value="Нет">Нет</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Закрыть
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Добавить клиента
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
