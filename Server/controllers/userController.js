import asyncHandler from "express-async-handler";
import userHelpers from "../Helpers/userHelpers.js";

const userController = () => {
  const getAllProperties = asyncHandler(async (req, res) => {
    const properties = await userHelpers().getAllProperties();
    res.json({
      properties,
      status: "success",
      message: "properties fetched successfully",
    });
  });

  const getPropertyById = asyncHandler(async (req, res) => {
    const { propertyId } = req.params;
    const property = await userHelpers().getPropertyById(propertyId);
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

  const tourSchedule = asyncHandler(async (req, res) => {
    const { propertyId } = req.params;
    const scheduleDetails = req.body;
    await userHelpers().tourSchedule(scheduleDetails, propertyId);
    res.json({
      status: "success",
      message: "We Got Your Request, We Will Get Back to You Soon ",
    });
  });
  const contactMail = asyncHandler(async (req, res) => {
    const contactDetails = req.body;
    await userHelpers().contactMail(contactDetails);
    res.json({
      status: "success",
      message: "Thank you, We Will Get Back to You Soon ",
    });
  });

  const placeAdd = asyncHandler(async (req, res) => {
    const contactDetails = req.body;
    await userHelpers().placeAdd(contactDetails);
    res.json({
      status: "success",
      message: "Thank you, We Will Get Back to You Soon ",
    });
  });
  return {
    getAllProperties,
    getPropertyById,
    tourSchedule,
    contactMail,
    placeAdd
  };
};

export default userController;
