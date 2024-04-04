import express from "express";
import adminController from "../controllers/adminController.js";

const adminRoutes = () => {
  const router = express.Router();
  const Controller = adminController();

  router.post("/admin-login", Controller.adminLogin);

  router.post("/add-property", Controller.addProperty);

  router.get("/all_properties", Controller.getAllProperties);

  router.get("/get_property/:propertyId", Controller.getPropertyById);

  router.put("/edit_property/:propertyId", Controller.editProperty);

  router.put("/list_unlist/:propertyId", Controller.listUnlist);

  router.delete("/delete_property/:propertyId", Controller.deleteProperty);

  return router;
};

export default adminRoutes;
