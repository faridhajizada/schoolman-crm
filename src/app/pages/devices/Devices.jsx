import React, { useState } from "react";
import {
  useAllDevicesQuery,
  useDeleteDeviceMutation,
  useUpdateDeviceMutation,
  useSingleUpdateDeviceMutation,
  useCreateDeviceMutation,
} from "./../../api/devicesApi.js";
import { Modal, Button, Form } from "react-bootstrap";

function Devices() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useAllDevicesQuery(currentPage);
  const [deleteDevice] = useDeleteDeviceMutation();
  const [updateDevice] = useUpdateDeviceMutation();
  const [singleUpdateDevice] = useSingleUpdateDeviceMutation();
  const [createDevice] = useCreateDeviceMutation();
  const [showModal, setShowModal] = useState(false);
  const [createDeviceModal, setCreateDeviceModal] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [newDevice, setNewDevice] = useState({
    title: "",
    quantity: "",
    is_available: true,
  });

  const [filters, setFilters] = useState({
    title: "",
    quantityFrom: "",
    quantityTo: "",
    isAvailable: "all",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredDevices = data?.data?.filter((device) => {
    const matchesTitle = device.title
      .toLowerCase()
      .includes(filters.title.toLowerCase());
    const matchesQuantityFrom =
      filters.quantityFrom === "" || device.quantity >= filters.quantityFrom;
    const matchesQuantityTo =
      filters.quantityTo === "" || device.quantity <= filters.quantityTo;
    const matchesIsAvailable =
      filters.isAvailable === "all" ||
      device.is_available === (filters.isAvailable === "true");

    return (
      matchesTitle &&
      matchesQuantityFrom &&
      matchesQuantityTo &&
      matchesIsAvailable
    );
  });

  const handleDeleteDevice = (id) => {
    deleteDevice(id)
      .unwrap()
      .then(() => {
        console.log("Device deleted", id);
        handlePageChange(currentPage);
      })
      .catch((error) => console.error("Failed to delete device: ", error));
  };

  const handleUpdateDevice = (e) => {
    e.preventDefault();
    if (selectedDevice) {
      updateDevice(selectedDevice)
        .unwrap()
        .then(() => {
          setShowModal(false);
          setSelectedDevice(null);
          handlePageChange(currentPage);
        })
        .catch((error) => console.error("Failed to update device: ", error));
    }
  };

  const handleCreateDevice = (e) => {
    e.preventDefault();
    createDevice(newDevice)
      .unwrap()
      .then(() => {
        setCreateDeviceModal(false);
        setNewDevice({ title: "", quantity: "", is_available: true });
        handlePageChange(currentPage);
      })
      .catch((error) => console.error("Failed to create device: ", error));
  };

  const handleActiveToggle = (device) => {
    singleUpdateDevice({
      id: device.id,
      is_available: !device.is_available,
      title: device.title,
    })
      .unwrap()
      .then(() => {
        console.log("Device active state updated", device.id);
        handlePageChange(currentPage);
      })
      .catch((error) =>
        console.error("Failed to update active state: ", error)
      );
  };

  const openModal = (device) => {
    setSelectedDevice(device);
    setShowModal(true);
  };

  const openCreateDeviceModal = () => {
    setCreateDeviceModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDevice(null);
  };

  const closeCreateDeviceModal = () => {
    setCreateDeviceModal(false);
    setNewDevice({ title: "", quantity: 0, is_available: false });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading devices</div>;
  }

  return (
    <div className="card card-flush p-4">
      <div className="card-header">
        <h3 className="card-title">Список Устройств</h3>
        <button
          type="button"
          className="btn btn-success"
          onClick={openCreateDeviceModal}
        >
          Добавить Аппарат
        </button>
      </div>
      <div className="card-body">
        <div className="mb-4">
          <div className="row mb-3">
            <div className="col-md-6 mt-2">
              <Form.Group>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Фильтр по названию"
                  value={filters.title}
                  onChange={handleFilterChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-6 mt-2">
              <Form.Group>
                <Form.Control
                  as="select"
                  name="isAvailable"
                  value={filters.isAvailable}
                  onChange={handleFilterChange}
                >
                  <option value="all">Все</option>
                  <option value="true">Активные</option>
                  <option value="false">Неактивные</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className="col-md-6 mt-2">
              <Form.Group>
                <Form.Control
                  type="number"
                  name="quantityFrom"
                  placeholder="Количество от"
                  value={filters.quantityFrom}
                  onChange={handleFilterChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-6 mt-2">
              <Form.Group>
                <Form.Control
                  type="number"
                  name="quantityTo"
                  placeholder="Количество до"
                  value={filters.quantityTo}
                  onChange={handleFilterChange}
                />
              </Form.Group>
            </div>
          </div>
        </div>

        <table className="table align-middle table-row-dashed fs-6 gy-5">
          <thead>
            <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
              <th>ID</th>
              <th>Название</th>
              <th>Количество</th>
              <th>Активен</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 fw-semibold">
            {filteredDevices?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <a href="#" className="text-blue-600">
                    {item.title}
                  </a>
                </td>
                <td>
                  <span className="badge badge-light">{item.quantity}</span>
                </td>
                <td>
                  <div className="form-check form-switch form-check-custom form-check-solid">
                    <input
                      className="form-check-input success"
                      type="checkbox"
                      id={`activeSwitch-${item.id}`}
                      checked={item.is_available}
                      onChange={() => handleActiveToggle(item)}
                    />
                  </div>
                </td>
                <td>
                  <button
                    className="btn btn-icon btn-warning btn-sm mx-1"
                    onClick={() => openModal(item)}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-icon btn-danger btn-sm mx-1"
                    onClick={() => handleDeleteDevice(item.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button
          className="btn btn-light"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          Первая
        </button>

        <button
          className="btn btn-light"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Назад
        </button>
        <span className="p-4">
          {currentPage} из {data.meta.last_page}
        </span>
        <button
          className="btn btn-light"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === data.meta.last_page}
        >
          Вперед
        </button>
        <button
          className="btn btn-light"
          onClick={() => handlePageChange(data.meta.last_page)}
          disabled={currentPage === data.meta.last_page}
        >
          Последняя
        </button>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Изменить Устройство</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDevice && (
            <Form onSubmit={handleUpdateDevice}>
              <Form.Group controlId="formDeviceTitle">
                <Form.Label>Название</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedDevice.title}
                  onChange={(e) =>
                    setSelectedDevice({
                      ...selectedDevice,
                      title: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formDeviceQuantity">
                <Form.Label>Количество</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedDevice.quantity}
                  onChange={(e) =>
                    setSelectedDevice({
                      ...selectedDevice,
                      quantity: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formDeviceActive">
                <Form.Check
                  type="checkbox"
                  label="Активен"
                  checked={selectedDevice.is_available}
                  onChange={(e) =>
                    setSelectedDevice({
                      ...selectedDevice,
                      is_available: e.target.checked,
                    })
                  }
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Сохранить
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>

      <Modal show={createDeviceModal} onHide={closeCreateDeviceModal}>
        <Modal.Header closeButton>
          <Modal.Title>Создать Устройство</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreateDevice}>
            <Form.Group controlId="formNewDeviceTitle">
              <Form.Label>Название</Form.Label>
              <Form.Control
                type="text"
                value={newDevice.title}
                onChange={(e) =>
                  setNewDevice({ ...newDevice, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formNewDeviceQuantity">
              <Form.Label>Количество</Form.Label>
              <Form.Control
                type="number"
                value={newDevice.quantity}
                onChange={(e) =>
                  setNewDevice({
                    ...newDevice,
                    quantity: parseInt(e.target.value, 10),
                  })
                }
              />
            </Form.Group>
            {/* <Form.Group controlId="formNewDeviceActive">
              <Form.Check
                type="checkbox"
                label="Активен"
                checked={newDevice.is_available}
                onChange={(e) =>
                  setNewDevice({ ...newDevice, is_available: e.target.checked })
                }
              />
            </Form.Group> */}
            <Button variant="primary" type="submit" className="mt-3">
              Создать
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Devices;
