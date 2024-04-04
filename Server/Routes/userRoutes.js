import express from "express";
import userController from "../controllers/userController.js";
const userRoutes = () => {
  const router = express.Router();
  const Controller = userController();

  router.get("/all_properties", Controller.getAllProperties);

  router.get("/get_property/:propertyId", Controller.getPropertyById);

  router.post("/tour_schedule/:propertyId",Controller.tourSchedule);

  router.post("/contact_mail",Controller.contactMail);

  router.post("/place_add",Controller.placeAdd);

  return router;
};

export default userRoutes;
