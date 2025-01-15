export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, comment } = req.body;

    // Basic validation
    if (!name || !email || !phone || !comment) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Simulate saving the data (e.g., save to database or send an email)
    console.log("Form Data:", { name, email, phone, comment });

    return res.status(200).json({ message: "Form submitted successfully." });
  }

  return res.status(405).json({ error: "Method not allowed." });
}
