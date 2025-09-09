import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  get_speciality_by_id,
  get_doctors_by_speciality,
} from "../store/reducers/homeReducer";

const SpecialitiesDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    selectedSpeciality,
    doctors,
    statusSpeciality,
    statusDoctors,
    errorSpeciality,
    errorDoctors,
  } = useSelector((state) => state.home);

  // useEffect(() => {
  //   if (id) {
  //     dispatch(get_speciality_by_id(id));
  //     dispatch(get_doctors_by_speciality(id));
  //   }
  // }, [id, dispatch]);
  useEffect(() => {
    if (id) {
      dispatch(get_speciality_by_id(id));
      dispatch(get_doctors_by_speciality(id));
    }
  }, [id, dispatch]);

  // Loading states
  if (statusSpeciality === "loading") {
    return <p className="text-center mt-10">Loading speciality...</p>;
  }
  if (statusDoctors === "loading") {
    return <p className="text-center mt-10">Loading doctors...</p>;
  }

  // Error states
  if (statusSpeciality === "failed") {
    return (
      <p className="text-center mt-10">
        {errorSpeciality?.message || "Failed to load speciality"}
      </p>
    );
  }
  if (statusDoctors === "failed") {
    return (
      <p className="text-center mt-10">
        {errorDoctors?.message || "Failed to load doctors"}
      </p>
    );
  }

  // No speciality found
  if (!selectedSpeciality) {
    return <p className="text-center mt-10">No speciality found.</p>;
  }

  return (
    <div className="mt-[100px]">
      {/* Speciality banner */}
      <img
        src={selectedSpeciality.image2}
        alt={selectedSpeciality.title}
        className="h-[550px] w-full object-cover"
      />

      {/* Speciality info */}
      <div className="text-center px-5 md:px-20">
        <p className="text-4xl font-bold py-7">{selectedSpeciality.title}</p>
        <p className="py-5">{selectedSpeciality.longDescription}</p>
      </div>

      {/* Doctors list */}
      <div className="text-center mt-10">
        <p className="text-3xl font-bold py-7">Our Doctors</p>

        {doctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
            {doctors.map((doc) => (
              <div key={doc._id} className="shadow-lg rounded-xl p-4">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="h-48 w-full object-cover rounded-lg"
                />
                <h3 className="mt-4 text-xl font-semibold">{doc.name}</h3>
                <p className="text-gray-600">{doc.designation}</p>
                <div className="mt-3 flex justify-center gap-3">
                  <Link
                    to={`/doctors/${doc._id}`}
                    className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                  >
                    Learn more
                  </Link>
                  <Link
                    to={`/appointment/${doc._id}`}
                    className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                  >
                    Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-5 text-gray-500">
            No doctors found for this speciality.
          </p>
        )}
      </div>
    </div>
  );
};

export default SpecialitiesDetailsPage;
