// pages/api/contact.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, comment } = req.body;

    if (!name || !email || !phone || !comment) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    // Setup the nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail password or app-specific password
      },
    });

    // Setup email data
    const mailOptions = {
      from: `"Contact Form" <${process.env.GMAIL_USER}>`, // Set 'from' dynamically
      to: "guru.prasad@blisttech.com", // Your recipient email address
      subject: `New Contact Form Submission`,
      text:  `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Comment: ${comment}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, message: "Failed to send message." });
    }
  } else {
    // Handle non-POST requests
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
 