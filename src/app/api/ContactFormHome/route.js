import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, comment } = body;

    if (!name || !email || !comment) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

     const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER, 
      to: process.env.GMAIL_RECEIVER, 
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nComment: ${comment}`,
      html: `
        <div style="padding:50px 100px; background: #F7F7F7;width: 600px;">
          <div style="border:1px solid #DEDEDE;border-top: none;">
              <h1 style="font-size:24px;color:#fff;padding:10px 15px;background: #349aee;font-weight:300;line-height:70px;margin:0px;display: flex;justify-content: center;">Blisttech Contact Form</h1>            
              <table width="100%" border="0" cellpadding="5" cellspacing="2" style="border-collapse:collapse;">
              <tr><td width="33%" bgcolor="#ffffff" style="padding:20px 28px;"><strong>Full Name</strong></td><td width="67%" bgcolor="#ffffff" style="padding:20px 28px;">${name}</td></tr>
              <tr><td width="33%" bgcolor="#ffffff" style="padding:20px 28px;"><strong>Email Address</strong></td><td width="67%" bgcolor="#ffffff" style="padding:20px 28px;">${email}</td></tr>
              <tr><td width="33%" bgcolor="#ffffff" style="padding:20px 28px;"><strong>Phone Number</strong></td><td width="67%" bgcolor="#ffffff" style="padding:20px 28px;">${phone || 'N/A'}</td></tr>
              <tr><td width="33%" bgcolor="#ffffff" style="padding:20px 28px;"><strong>Message</strong></td><td width="67%" bgcolor="#ffffff" style="padding:20px 28px;">${comment}</td></tr>
            </table>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
