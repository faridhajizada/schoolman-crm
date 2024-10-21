import React, { useState } from "react";
import {
  useCourseQuery,
  useQualificationQuery,
  useCourseListQuery,
} from "./../../../api/courseApi.js";
import CourseTable from "./CourseTable";
import Pagination from "./Pagination";
import CourseModal from "./CourseModal";
import "./ArrangeCourse.scss";

function ArrangeCourse() {
  const { data: CourseName } = useCourseQuery(null);
  const { data: Qualification } = useQualificationQuery(null);

  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const {
    data: CourseList,
    isError,
    error,
  } = useCourseListQuery({
    pageNumber,
    pageSize,
  });

  const [createCourseModal, setCreateCourseModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    CourseName: "",
    QualificationName: "",
  });

  const openCreateCourseModal = () => setCreateCourseModal(true);
  const closeCreateDeviceModal = () => setCreateCourseModal(false);

  const handleCourse = (e) => {
    e.preventDefault();
    console.log(newCourse);
  };

  return (
    <section className="ArrangeCourse">
      <div className="card card-flush p-4">
        <div className="card-header px-0 align-items-center">
          <h3 className="card-title">Arrange Course</h3>
          <button className="btn btn-success" onClick={openCreateCourseModal}>
            Add Course
          </button>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            {isError ? (
              <p>Error: {error.message}</p>
            ) : (
              <CourseTable courses={CourseList} />
            )}
          </div>
        </div>
      </div>

      <CourseModal
        show={createCourseModal}
        handleClose={closeCreateDeviceModal}
        newCourse={newCourse}
        setNewCourse={setNewCourse}
        CourseName={CourseName}
        Qualification={Qualification}
        handleSubmit={handleCourse}
      />

      <Pagination
        pageNumber={pageNumber}
        pageSize={pageSize}
        setPageNumber={setPageNumber}
        setPageSize={setPageSize}
      />
    </section>
  );
}

export default ArrangeCourse;
