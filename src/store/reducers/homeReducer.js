import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

// ✅ Fetch all specialities
export const get_specialities = createAsyncThunk(
  "home/get_specialities",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get("/api/v1/specialities/all");
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch specialities"
      );
    }
  }
);

// ✅ Fetch speciality by ID
// export const get_speciality_by_id = createAsyncThunk(
//   "home/get_speciality_by_id",
//   async (id, { fulfillWithValue, rejectWithValue }) => {
//     try {
//       const { data } = await api.get(`/api/v1/specialities/${id}`);
//       return fulfillWithValue(data);
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data || "Failed to fetch speciality"
//       );
//     }
//   }
// );
export const get_speciality_by_id = createAsyncThunk(
  "home/get_speciality_by_id",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/api/v1/specialities/${id}`);
      return data.data; // ✅ extract the speciality object
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch speciality"
      );
    }
  }
);

// ✅ Fetch doctors by ID
export const get_doctor_by_id = createAsyncThunk(
  "home/get_doctor_by_id",
  async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get(`/api/v1/doctors/${id}`);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch speciality"
      );
    }
  }
);

// ✅ Fetch doctors by speciality ID
// export const get_doctors_by_speciality = createAsyncThunk(
//   "home/get_doctors_by_speciality",
//   async (id, { fulfillWithValue, rejectWithValue }) => {
//     try {
//       const { data } = await api.get(`/api/v1/specialities/doctors/${id}`);
//       return fulfillWithValue(data);
//     } catch (error) {
//       return rejectWithValue(error.response?.data || "Failed to fetch doctors");
//     }
//   }
// );
export const get_doctors_by_speciality = createAsyncThunk(
  "home/get_doctors_by_speciality",
  async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get(`/api/v1/specialities/doctors/${id}`);
      return fulfillWithValue(data.data); // ✅ extract the array
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch doctors");
    }
  }
);

// ✅ Create Appointment
export const create_appointment = createAsyncThunk(
  "home/create_appointment",
  async (appointmentData, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "/api/v1/appointment/create",
        appointmentData
      );
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to create appointment"
      );
    }
  }
);

// ✅ Get appointments by doctor
export const get_appointments_by_doctor = createAsyncThunk(
  "home/get_appointments_by_doctor",
  async (doctorId, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get(`/api/v1/appointments/doctor/${doctorId}`);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch doctor's appointments"
      );
    }
  }
);

// ✅ Get appointments by patient
export const get_appointments_by_patient = createAsyncThunk(
  "home/get_appointments_by_patient",
  async (patientId, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get(
        `/api/v1/appointments/patient/${patientId}`
      );
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch patient's appointments"
      );
    }
  }
);

const homeReducer = createSlice({
  name: "home",
  initialState: {
    specialities: [],
    selectedSpeciality: null,
    selectedDoctor: null,
    doctors: [],
    appointments: [],
    statusSpeciality: "idle", // idle | loading | succeeded | failed
    statusDoctors: "idle",
    statusDoctor: "idle",
    errorSpeciality: null,
    errorDoctors: null,
    errorDoctor: null,
    statusAppointment: "idle",
    errorAppointment: null,
  },
  reducers: {
    messageClear: (state) => {
      state.errorSpeciality = null;
      state.errorDoctors = null;
      state.errorAppointment = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Specialities List
      .addCase(get_specialities.pending, (state) => {
        state.statusSpeciality = "loading";
      })
      .addCase(get_specialities.fulfilled, (state, { payload }) => {
        state.statusSpeciality = "succeeded";
        state.specialities = payload.data;
      })
      .addCase(get_specialities.rejected, (state, { payload }) => {
        state.statusSpeciality = "failed";
        state.errorSpeciality = payload;
      })

      // Single doctor
      .addCase(get_doctor_by_id.pending, (state) => {
        state.statusDoctor = "loading";
        state.errorDoctor = null;
      })
      .addCase(get_doctor_by_id.fulfilled, (state, { payload }) => {
        state.statusDoctor = "succeeded";
        state.selectedDoctor = payload?.data || payload;
      })
      .addCase(get_doctor_by_id.rejected, (state, { payload }) => {
        state.statusDoctor = "failed";
        state.errorDoctor = payload || "Failed to fetch speciality";
      })

      // Single Speciality
      .addCase(get_speciality_by_id.pending, (state) => {
        state.statusSpeciality = "loading";
        state.errorSpeciality = null;
      })
      .addCase(get_speciality_by_id.fulfilled, (state, { payload }) => {
        state.statusSpeciality = "succeeded";
        state.selectedSpeciality = payload.data || payload;
      })
      .addCase(get_speciality_by_id.rejected, (state, { payload }) => {
        state.statusSpeciality = "failed";
        state.errorSpeciality = payload || "Failed to fetch speciality";
      })

      // Doctors by Speciality
      .addCase(get_doctors_by_speciality.pending, (state) => {
        state.statusDoctors = "loading";
        state.errorDoctors = null;
      })
      .addCase(get_doctors_by_speciality.fulfilled, (state, { payload }) => {
        state.statusDoctors = "succeeded";
        state.doctors = payload.data;
      })
      .addCase(get_doctors_by_speciality.rejected, (state, { payload }) => {
        state.statusDoctors = "failed";
        state.errorDoctors = payload || "Failed to fetch doctors";
      })
      // ✅ Create Appointment
      .addCase(create_appointment.pending, (state) => {
        state.statusAppointment = "loading";
        state.errorAppointment = null;
      })
      .addCase(create_appointment.fulfilled, (state, { payload }) => {
        state.statusAppointment = "succeeded";
      })
      .addCase(create_appointment.rejected, (state, { payload }) => {
        state.statusAppointment = "failed";
        state.errorAppointment = payload;
      })

      // ✅ Get Appointments by Doctor
      .addCase(get_appointments_by_doctor.fulfilled, (state, { payload }) => {
        state.appointments = payload.data;
      })

      // ✅ Get Appointments by Patient
      .addCase(get_appointments_by_patient.fulfilled, (state, { payload }) => {
        state.appointments = payload.data;
      });
  },
});

export const { messageClear } = homeReducer.actions;
export default homeReducer.reducer;
