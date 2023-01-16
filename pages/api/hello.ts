import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const response = {
    text: "Hello World!",
    secondText: "Hola mundo!",
    url: req.url,
  };

  return NextResponse.json(response);
}
