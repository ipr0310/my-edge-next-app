import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default (req: NextRequest) => new Response("Hello world!");
