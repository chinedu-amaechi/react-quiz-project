// src/app/api/users/route.js

import connectToDb from "../../../../lib/mongo";
import User from "../../../../models/user";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    await connectToDb();
    const user = await req.json();

    const newUser = new User({
      name: user.name,
      highestPoints: user.highestPoints,
    });

    await newUser.save();
    console.log("saved");

    return NextResponse.json({
      message: "User added to data base",
      statusCode: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to add user",
      statusCode: 500,
    });
  }
}
