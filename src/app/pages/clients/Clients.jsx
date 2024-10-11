import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import "./Clients.css";
import Filters from "./Filters";
import ClientList from "./ClientList";
import ModalForm from "./ModalForm";
import { generateRandomCustomers } from "./generateRandomCustomers";

function Clients() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const [filter, setFilter] = useState({
    name: "",
    phone: "",
    dateFrom: "",
    dateTo: "",
    status: "",
    returns: "",
    gender: "",
    region: "",
  });

  const [customers] = useState(() => generateRandomCustomers(100));
  console.log(customers);

  const [newClient, setNewClient] = useState({
    name: "",
    number: "",
    status: "",
    registrationDate: "",
    position: "",
    reject: "",
    gender: "",
    region: "",
    saleDayRegistation: "",
    returns: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 10;

  const totalPages = useMemo(
    () => Math.ceil(customers.length / customersPerPage),
    [customers.length]
  );

  const currentCustomers = useMemo(() => {
    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
    return customers.slice(indexOfFirstCustomer, indexOfLastCustomer);
  }, [currentPage, customers]);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  }, [totalPages]);

  const handlePreviousPage = useCallback(() => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setNewClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    setCustomers((prevCustomers) => [
      ...prevCustomers,
      { ...newClient, id: prevCustomers.length + 1 },
    ]);
    setShowModal(false);
  }, [newClient]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    const handleEscapePress = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapePress);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapePress);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, [showModal]);

  const handleFilterChange = useCallback((e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  }, []);

  const filteredCustomers = useMemo(() => {
    return currentCustomers.filter((customer) => {
      const matchesName = customer.name
        .toLowerCase()
        .includes(filter.name.toLowerCase());
      const matchesPhone = customer.number.includes(filter.phone);
      const matchesDateFrom =
        filter.dateFrom === "" ||
        new Date(customer.registrationDate) >= new Date(filter.dateFrom);
      const matchesDateTo =
        filter.dateTo === "" ||
        new Date(customer.registrationDate) <= new Date(filter.dateTo);
      const matchesStatus =
        filter.status === "" || customer.status === filter.status;
      const matchesReturns =
        filter.returns === "" || customer.returns === filter.returns;
      const matchesGender =
        filter.gender === "" || customer.gender === filter.gender;
      const matchesRegion =
        filter.region === "" || customer.region === filter.region;
      return (
        matchesName &&
        matchesPhone &&
        matchesDateFrom &&
        matchesDateTo &&
        matchesStatus &&
        matchesReturns &&
        matchesGender &&
        matchesRegion
      );
    });
  }, [filter, currentCustomers]);

  return (
    <section className="clients">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="addClient">
              <h2>Клиенты</h2>
              <div
                className="badge badge-light-primary"
                onClick={() => setShowModal(true)}
              >
                <i className="fa-solid fa-user-plus"></i> Добавить клиента
              </div>
            </div>
          </div>
        </div>

        <Filters filter={filter} handleFilterChange={handleFilterChange} />

        <ClientList
          filteredCustomers={filteredCustomers}
          currentPage={currentPage}
          customersPerPage={customersPerPage}
        />

        <div className="pagination-controls mt-3 text-center">
          <button
            className="badge badge-light-secondary me-2"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Предыдущая
          </button>
          <button
            className="badge badge-light-secondary"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Следующая
          </button>
          <div className="text-center mt-3">
            <p>
              Страница {currentPage} из {totalPages}
            </p>
          </div>
        </div>
        {showModal && (
          <ModalForm
            newClient={newClient}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            setShowModal={setShowModal}
            modalRef={modalRef}
          />
        )}
      </div>
    </section>
  );
}

export default React.memo(Clients);
