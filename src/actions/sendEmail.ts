"use server";

import { EmailNotificationTemplate } from "@/components/EmailNotificationTemplate";
import { truncate } from "@/utils";
import { ReactNode } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADM_EMAIL = process.env.ADM_EMAIL;
const OP_EMAIL = process.env.OP_EMAIL;

export const sendEmail = async (message: string, email: string, firstName?: string, lastName?: string, subject?: string): Promise<boolean> => {
	if (!ADM_EMAIL || !OP_EMAIL) {
		return false;
	}

	let fullName: string | undefined = `${firstName?.trim().substring(0, 100) ?? ""} ${lastName?.trim().substring(0, 100) ?? ""}`.trim();

	const previewText = truncate(message, 130, "...");

	const { error } = await resend.emails.send({
		from: `UzakTech <${OP_EMAIL}>`,
		to: [ADM_EMAIL],
		subject: `Client Message Received: "${truncate(subject?.trim() ? subject : message, 33, "...").replaceAll("\n", "")}"`,
		react: EmailNotificationTemplate({ 
			email: email.substring(0, 255), 
			message: message.substring(0, 3333), 
			name: fullName == "" ? "no_name" : fullName, 
			subject: (subject?.trim() || "no_subject").substring(0, 255), 
			previewText 
		}) as ReactNode
	});
	
	if (error) {
		throw new Error(error.message);
	}
	
	return true;
}