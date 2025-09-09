import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  get_doctor_by_id,
  get_speciality_by_id,
} from "../store/reducers/homeReducer";

const DoctorsProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedDoctor, statusDoctor, errorDoctor, selectedSpeciality } =
    useSelector((state) => state.home);

  //  const [specialityId, setSpecialityId] = useState(null);
  const specialityId =
    selectedDoctor?.specialities?.length > 0
      ? selectedDoctor.specialities[0]._id
      : "";
  useEffect(() => {
    if (id) {
      dispatch(get_doctor_by_id(id));
    }
  }, [id, dispatch]);

  //   useEffect(() => {
  //     if (selectedDoctor?.specialities?.length > 0) {
  //       const firstSpecialityId = selectedDoctor.specialities[0];
  //       setSpecialityId(firstSpecialityId);
  //       dispatch(get_speciality_by_id(firstSpecialityId));
  //     }
  //   }, [selectedDoctor, dispatch]);
  useEffect(() => {
    if (selectedDoctor?.specialities?.length > 0) {
      const firstSpeciality = selectedDoctor.specialities[0];
      const specialityId =
        typeof firstSpeciality === "object"
          ? firstSpeciality._id
          : firstSpeciality;
      dispatch(get_speciality_by_id(specialityId));
    }
  }, [selectedDoctor, dispatch]);

  if (statusDoctor === "loading") {
    return <div className="mt-[100px] text-center">Loading doctor...</div>;
  }

  if (statusDoctor === "failed") {
    return (
      <div className="mt-[100px] text-center text-red-500">
        {errorDoctor || "Failed to fetch doctor"}
      </div>
    );
  }

  if (!selectedDoctor) {
    return <div className="mt-[100px] text-center">No doctor found.</div>;
  }

  return (
    <div className="mt-[100px] max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Doctor Info */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={selectedDoctor.image}
          alt={selectedDoctor.name}
          className="w-40 h-40 object-cover rounded-full shadow-md"
        />
        <div>
          <h1 className="text-2xl font-bold">{selectedDoctor.name}</h1>
          <p className="text-gray-600">{selectedDoctor.designation}</p>
          <p className="text-gray-500 mt-2">
            {selectedSpeciality
              ? selectedSpeciality.title
              : "Loading speciality..."}
          </p>
        </div>
      </div>

      {/* Doctor Details */}
      <div className="my-6 ">
        <h2 className="text-xl font-semibold mb-2">About</h2>
        <p className="text-gray-700">{selectedDoctor.details}</p>
      </div>

      {/* Speciality Info */}
      {selectedSpeciality && (
        <div className="mt-10 border-t pt-6">
          <h2 className="text-xl font-semibold mb-3">
            Speciality: {selectedSpeciality.title}
          </h2>
          <p className="text-gray-600 mb-4">
            {selectedSpeciality.shortDescription}
          </p>
          <div className="flex gap-4">
            <img
              src={selectedSpeciality.image1}
              alt={selectedSpeciality.title}
              className="w-40 h-28 object-cover rounded-lg shadow"
            />
            <img
              src={selectedSpeciality.image2}
              alt={selectedSpeciality.title}
              className="w-40 h-28 object-cover rounded-lg shadow"
            />
          </div>
          {/* <Link
            to={`/appointment/${selectedDoctor._id}`}
            className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition ml-5"
          >
            Appointment
          </Link> */}

          {/* <Link
            to={`/appointment?doctor=${selectedDoctor._id}&speciality=${specialityId}`}
          >
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Book Appointment
            </button>
          </Link> */}

          <Link to={`/appointment/${selectedDoctor._id}`}>
            Book Appointment
          </Link>
        </div>
      )}
    </div>
  );
};

export default DoctorsProfile;
