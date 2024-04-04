import Property from "../Model/propertyModel.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const userHelpers = () => {
  const getAllProperties = async () => {
    const properties = await Property.find();
    return properties.reverse();
  };

  const getPropertyById = async (propertyId) => {
    const property = await Property.findOne({ _id: propertyId });
    return property;
  };

  const tourSchedule = async (scheduleDetails, propertyId) => {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      const mailOptions = {
        from: scheduleDetails?.email,
        to: process.env.EMAIL,
        subject: "Property Schedule Tour Request",
        html: `<p>Hello Onedeals team,</p>
               <p>You got a new request from ${scheduleDetails?.name}</p>

               <h3>Request Details</h3>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Name:</strong>${scheduleDetails?.name}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Email:</strong> ${scheduleDetails?.email}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Contact Number:</strong>${scheduleDetails?.phone}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Property ID:</strong>${propertyId}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Requested Date:</strong> ${scheduleDetails?.date}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Requested Time:</strong> ${scheduleDetails?.time}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Message:</strong> ${scheduleDetails?.message}</p>
               <p style="margin-left: 12px;font-weight: bolder;">Best Regards,</p>
               <p style="margin-left: 12px;font-weight: bolder;">${scheduleDetails?.name}</p>`,
      };
      return new Promise(async (resolve, reject) => {
        await transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Error sending email:", error);
            reject(error);
          } else {
            console.log("Email sent:", info.response);
            resolve(true);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const contactMail = async (contactDetails) => {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      const mailOptions = {
        from: contactDetails?.email,
        to: process.env.EMAIL,
        subject: "Property Contact",
        html: `<p>Hello Onedeals team,</p>
               <p>You got a new request from ${contactDetails?.f_name}</p>

               <h3>Request Details</h3>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>First Name:</strong>${contactDetails?.f_name}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Last Name:</strong>${contactDetails?.l_name}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Email:</strong> ${contactDetails?.email}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Contact Number:</strong>${contactDetails?.phone}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Message:</strong> ${contactDetails?.message}</p>
               <p style="margin-left: 12px;font-weight: bolder;">Best Regards,</p>
               <p style="margin-left: 12px;font-weight: bolder;">${contactDetails?.f_name}</p>`,
      };
      return new Promise(async (resolve, reject) => {
        await transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Error sending email:", error);
            reject(error);
          } else {
            console.log("Email sent:", info.response);
            resolve(true);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const placeAdd = async (addDetails) => {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      const mailOptions = {
        from: addDetails?.email,
        to: process.env.EMAIL,
        subject: "Place Add Request",
        html: `<p>Hello Onedeals team,</p>
               <p>You got a new request from ${addDetails?.name}</p>

               <h3>Request Details</h3>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>First Name:</strong>${addDetails?.name}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Email:</strong> ${addDetails?.email}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Contact Number:</strong>${addDetails?.phone}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Property Category:</strong>${addDetails?.propertyCategory}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Sale Or Rent:</strong>${addDetails?.saleOrRent}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Place:</strong>${addDetails?.place}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>City:</strong>${addDetails?.city}</p>
               <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;"><strong>Message:</strong> ${addDetails?.message}</p>
               <p style="margin-left: 12px;font-weight: bolder;">Best Regards,</p>
               <p style="margin-left: 12px;font-weight: bolder;">${addDetails?.name}</p>`,
      };
      return new Promise(async (resolve, reject) => {
        await transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Error sending email:", error);
            reject(error);
          } else {
            console.log("Email sent:", info.response);
            resolve(true);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAllProperties,
    getPropertyById,
    tourSchedule,
    contactMail,
    placeAdd,
  };
};

export default userHelpers;
