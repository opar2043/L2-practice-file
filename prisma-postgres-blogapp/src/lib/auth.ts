import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";
import { request } from "node:http";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS,
  },
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  trustedOrigins: [process.env.APP_URL!],
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "USER",
        required: true,
      },
    },
  },

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: false,
  },

  emailVerification: {
    autoSignInAfterVerification: true,
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      try {
        const verifyToken = `${process.env.APP_URL}/verify-email?token=${token}`;

        const info = await transporter.sendMail({
          from: '"BLOG APP.CO" <blogapp.co@gmail.com>',
          to: user.email,
          subject: "Verify Your Email Address",
          text: `Please verify your email by visiting this link: ${verifyToken}`,
          html: `
    <div style="max-width:600px;margin:0 auto;padding:20px;font-family:Arial,Helvetica,sans-serif;background:#ffffff;border-radius:8px;">
      <h2 style="color:#333;">Email Verification</h2>

      <p style="color:#555;font-size:15px;">
        Hello, ${user.name}
      </p>

      <p style="color:#555;font-size:15px;">
        Thank you for signing up to <strong>BLOG APP.CO</strong>.
        Please verify your email address by clicking the button below.
      </p>

      <div style="text-align:center;margin:30px 0;">
        <a href="${verifyToken}"
           style="background:#2563eb;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:6px;font-size:16px;display:inline-block;">
          Verify Email
        </a>
      </div>

      <p style="color:#777;font-size:13px;">
        If you did not create an account, you can safely ignore this email.
      </p>

      <hr style="border:none;border-top:1px solid #eee;margin:30px 0;">

      <p style="color:#999;font-size:12px;text-align:center;">
        © ${new Date().getFullYear()} BLOG APP.CO
      </p>
    </div>
  `,
        });
      } catch (error) {
        console.log("Error in gmail verification");
      }
    },
  },
});
