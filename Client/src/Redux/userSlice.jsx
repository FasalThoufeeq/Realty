import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "../api/userApi";

export const GetAllProperty = createAsyncThunk("all_properties", async () => {
  try {
    const response = await UserApi.get("all_properties");
    return response;
  } catch (err) {
    console.log(err);
  }
});

export const GetPropertyById = createAsyncThunk(
  "get_property",
  async (propertyId) => {
    try {
      const response = await UserApi.get(`get_property/${propertyId}`);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);
export const ScheduleTour = createAsyncThunk(
  "stour_schedule",
  async ({ propertyId, payload }) => {
    try {
      const response = await UserApi.post(
        `tour_schedule/${propertyId}`,
        payload
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const ContactMail = createAsyncThunk("contact_mail", async (payload) => {
  try {
    const response = await UserApi.post("contact_mail", payload);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const PlaceAdds = createAsyncThunk("place_add", async (payload) => {
  try {
    const response = await UserApi.post("place_add", payload);
    return response;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: () => {},
});
// export const {  } = userSlice.actions;
export default userSlice.reducer;
