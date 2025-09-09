// src/store/reducers/blogReducer.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api"; // your axios instance

// ==================== Async Thunks ==================== //

// Fetch all blogs
export const get_blogs = createAsyncThunk(
  "blog/get_blogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/v1/blog/all");
      return response.data.data; // ✅ only return the blogs array
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch single blog by ID
export const get_blog_by_id = createAsyncThunk(
  "blog/get_blog_by_id",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/api/v1/blogs/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Create a new blog
export const create_blog = createAsyncThunk(
  "blog/create_blog",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/api/v1/blogs", formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update blog
export const update_blog = createAsyncThunk(
  "blog/update_blog",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const { data } = await api.put(`/api/v1/blogs/${id}`, formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Delete blog
export const delete_blog = createAsyncThunk(
  "blog/delete_blog",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.delete(`/api/v1/blogs/${id}`);
      return { id, message: data.message };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ==================== Slice ==================== //
const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    selectedBlog: null,
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    clear_blog_messages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get Blogs
      .addCase(get_blogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_blogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(get_blogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get Blog by ID
      .addCase(get_blog_by_id.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_blog_by_id.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBlog = action.payload;
      })
      .addCase(get_blog_by_id.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create Blog
      .addCase(create_blog.pending, (state) => {
        state.loading = true;
      })
      .addCase(create_blog.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Blog created successfully!";
        state.blogs.push(action.payload);
      })
      .addCase(create_blog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update Blog
      .addCase(update_blog.fulfilled, (state, action) => {
        state.successMessage = "Blog updated successfully!";
        state.blogs = state.blogs.map((b) =>
          b._id === action.payload._id ? action.payload : b
        );
      })
      .addCase(update_blog.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Delete Blog
      .addCase(delete_blog.fulfilled, (state, action) => {
        state.successMessage = action.payload.message;
        state.blogs = state.blogs.filter((b) => b._id !== action.payload.id);
      })
      .addCase(delete_blog.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clear_blog_messages } = blogSlice.actions;
export default blogSlice.reducer;
