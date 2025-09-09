import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  get_doctor_by_id,
  create_appointment,
} from "../store/reducers/homeReducer";

const AppointmentPage = () => {
  const { doctorId } = useParams();
  const dispatch = useDispatch();
  const { selectedDoctor, statusDoctor } = useSelector((state) => state.home);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    email: "",
    requestFor: "Outpatient Consultation",
    speciality: "",
    doctor: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  // fetch doctor via redux
  useEffect(() => {
    if (doctorId) {
      dispatch(get_doctor_by_id(doctorId));
    }
  }, [doctorId, dispatch]);

  // when doctor data is loaded, prefill doctor + speciality
  useEffect(() => {
    if (selectedDoctor) {
      setForm((prev) => ({
        ...prev,
        doctor: selectedDoctor.name,
        speciality: selectedDoctor.specialities?.[0]?.title || "",
      }));
    }
  }, [selectedDoctor]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Submitting appointment:", form);
  //     // dispatch(create_appointment(form))
  //   };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert frontend form to backend format
    const appointmentData = {
      patient: {
        firstName: form.firstName,
        lastName: form.lastName,
        dob: form.dob,
        gender: form.gender,
        phone: form.contactNumber,
        email: form.email,
      },
      requestType: form.requestFor,
      speciality: selectedDoctor.specialities[0]._id, // must be ObjectId
      doctor: selectedDoctor._id, // must be ObjectId
      appointmentDate: form.appointmentDate,
      appointmentTime: form.appointmentTime,
    };

    console.log("Submitting appointment:", appointmentData);

    dispatch(create_appointment(appointmentData));
  };

  if (statusDoctor === "loading") return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-5">Appointment Request Form</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* Patient Info */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          name="contactNumber"
          placeholder="Enter Contact Number"
          value={form.contactNumber}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded col-span-2"
          required
        />

        {/* Request For */}
        <select
          name="requestFor"
          value={form.requestFor}
          onChange={handleChange}
          className="border p-2 rounded col-span-2"
          required
        >
          <option value="Outpatient Consultation">
            Outpatient Consultation
          </option>
          <option value="Inpatient Consultation">Inpatient Consultation</option>
        </select>

        {/* Speciality (pre-filled) */}
        <input
          type="text"
          name="speciality"
          value={form.speciality}
          readOnly
          className="border p-2 rounded"
        />

        {/* Doctor (pre-filled) */}
        <input
          type="text"
          name="doctor"
          value={form.doctor}
          readOnly
          className="border p-2 rounded"
        />

        {/* Appointment date/time */}
        <input
          type="date"
          name="appointmentDate"
          value={form.appointmentDate}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="time"
          name="appointmentTime"
          value={form.appointmentTime}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="col-span-2 bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppointmentPage;
