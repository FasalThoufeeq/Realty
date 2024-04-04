import Property from "../Model/propertyModel.js";
const adminHelpers = () => {
  const addProperty = async (propertyDetails) => {
    const newProperty = new Property(propertyDetails);
    await newProperty.save();
    return;
  };
  const getAllProperties = async () => {
    const allProperties = await Property.find();
    return allProperties.reverse();
  };

  const getPropertyById = async (propertyId) => {
    const property = await Property.findOne({ _id: propertyId });
    return property;
  };

  const editProperty = async (editedProperty, propertyId) => {
    const property = await Property.findByIdAndUpdate(
      { _id: propertyId },
      { $set: editedProperty },
      { new: true }
    );

    return property;
  };

  const listUlist = async (propertyId) => {
    const property = await Property.findById(propertyId);
    if (!property) {
      return null;
    }
    property.list = !property.list;
    const updatedProperty = await property.save();
    return updatedProperty;
  };

  const deleteProperty = async (propertyId) => {
    console.log("ppp");
    await Property.findByIdAndDelete(propertyId);
    return;
  };

  return {
    addProperty,
    getAllProperties,
    getPropertyById,
    editProperty,
    listUlist,
    deleteProperty,
  };
};

export default adminHelpers;
