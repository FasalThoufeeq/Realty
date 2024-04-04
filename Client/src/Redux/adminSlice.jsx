import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminApi from "../api/adminApi";

export const AdminLogin = createAsyncThunk("admin-login", async (payload) => {
  try {
    const response = await adminApi.post("admin-login", payload);
    return response;
  } catch (err) {
    console.log(err);
  }
});

export const AddProperty = createAsyncThunk("add-property", async (payload) => {
  try {
    const response = await adminApi.post("add-property", payload);
    return response;
  } catch (err) {
    console.log(err);
  }
});

export const GetAllProperty = createAsyncThunk(
  "all_property",
  async (payload) => {
    try {
      const response = await adminApi.get("all_properties", payload);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const GetPropertyById = createAsyncThunk(
  "get_property",
  async (propertyId) => {
    try {
      const response = await adminApi.get(`get_property/${propertyId}`);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const EditProperty = createAsyncThunk(
  "edit_property",
  async ({propertyId, payload}) => {
    try {
      const response = await adminApi.put(
        `edit_property/${propertyId}`,
        payload
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const ListUnlist = createAsyncThunk(
  "list_unlist",
  async (propertyId) => {
    try {
      const response = await adminApi.put(
        `list_unlist/${propertyId}`,
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const DeleteProperty = createAsyncThunk(
  "delete_property",
  async (propertyId) => {
    console.log(propertyId);
    try {
      const response = await adminApi.delete(
        `delete_property/${propertyId}`,
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  admin: {},
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    LogoutAdmin: (state) => {
      state.admin = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AdminLogin.fulfilled, (state, { payload }) => {
      state.admin = payload.data;
    });
  },
});
export const { LogoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
