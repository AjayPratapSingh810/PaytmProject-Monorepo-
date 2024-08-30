import { NextResponse } from "next/server";
import db from "@repo/db/client";

export const GET = async () => {
  const user = await db.user.create({
    data: {
      email: "asd@gmail.com",
      name: "adsads",
    },
  });
  console.log("user ", user);
  return NextResponse.json({
    message: "hi there",
  });
};
