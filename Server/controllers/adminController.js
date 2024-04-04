import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import adminHelpers from "../Helpers/adminHelper.js";
dotenv.config();
const adminCredential = {
  email: "onedealsrealtyadmin1@gmail.com",
  password: "onedealsrealtyadmin1@24",
};
const adminController = () => {
  const adminLogin = asyncHandler(async (req, res) => {
    const { email, password } = req?.body;
    if (
      email === adminCredential?.email &&
      password === adminCredential?.password
    ) {
      const secret = process.env.JWT_SECRET;
      const accessToken = jwt.sign({ role: "Admin" }, secret, {
        expiresIn: "5d",
      });
      res.json({
        status: "success",
        message: "Admin Login Successfull",
        token: accessToken,
      });
    } else {
      res.json({
        status: "failed",
        message: "Admin Login Credentail Not Match",
      });
    }
  });

  const addProperty = asyncHandler(async (req, res) => {
    if (req?.body?.propertyImages?.length == 0) {
      res.json({
        addedProperty,
        status: "failed",
        message: "something wrong please try again",
      });
    } else {
      const addedProperty = await adminHelpers().addProperty(req?.body);
      res.json({
        addedProperty,
        status: "success",
        message: "property added successfully",
      });
    }
  });
  const getAllProperties = asyncHandler(async (req, res) => {
    const allProperties = await adminHelpers().getAllProperties();
    res.json({
      properties: allProperties,
      status: "success",
      message: "properties fetched successfully",
    });
  });

  const getPropertyById = asyncHandler(async (req, res) => {
    const { propertyId } = req.params;
    const property = await adminHelpers().getPropertyById(propertyId);
    if (!property) {
      res.json({
        status: "failed",
        message: "property id does not have match",
      });
    } else {
      res.json({
        property,
        status: "success",
        message: "property fetching successful",
      });
    }
  });

  const editProperty = asyncHandler(async (req, res) => {
    const { propertyId } = req.params;
    const editedProperty = req.body;
    console.log(propertyId);
    console.log(editedProperty);

    const property = await adminHelpers().editProperty(
      editedProperty,
      propertyId
    );
    res.json({
      property,
      status: "success",
      message: "property edited successfully",
    });
  });
  const listUnlist = asyncHandler(async (req, res) => {
    const { propertyId } = req.params;
    const updatedProperty = await adminHelpers().listUlist(propertyId);
    res.json({
      updatedProperty,
      status: "success",
      message: "listing changed successfully",
    });
  });
  const deleteProperty = asyncHandler(async (req, res) => {
    const { propertyId } = req.params;
    await adminHelpers().deleteProperty(propertyId);
    res.json({
      status: "success",
      message: "property deleted successfully",
    });
  });
  return {
    adminLogin,
    addProperty,
    getAllProperties,
    getPropertyById,
    editProperty,
    listUnlist,
    deleteProperty
  };
};

export default adminController;
