// pages/api/properties/[id].ts
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  if (method !== "GET") {
    return res.status(405).end("Method Not Allowed");
  }

  const property = PROPERTYLISTINGSAMPLE.find(
    (item) => String(item.id) === String(id)
  );

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  return res.status(200).json(property);
}
