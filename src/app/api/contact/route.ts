import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { email, message } = await req.json();

        // console.log('backend called: ', email, message)

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New message from ${email}`,
            text: message,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Error sending email:", err);
        return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
    }
}
