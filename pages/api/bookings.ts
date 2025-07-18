import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const booking = req.body;
    console.log("📦 Booking received:", booking);
    return res.status(200).json({ message: "Booking received successfully" });
  }

  res.status(405).json({ message: "Method Not Allowed" });
}