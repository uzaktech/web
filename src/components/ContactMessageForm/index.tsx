"use client";

import * as bx from "@/styles/primitive/box";
import * as tx from "@/styles/primitive/text";
import * as wp from "@/styles/primitive/wrapper";
import { ButtonLink, Input, Textarea } from "@/components";
import { Button } from "@/styles/primitive/button";
import { MouseEvent, SubmitEvent, useState } from "react";
import { emailRegexp, emailTestRegexp, nameRegexp } from "@/utils";
import { FormProvider } from "@/context";
import { sendEmail } from "@/actions/sendEmail";

export const ContactMessageForm = () => {
	const [submitFallback, setSubmitFallback] = useState<boolean | null>(null);
	const [messageStatus, setMessageStatus] = useState<"to_send" | "sent" | "error">("to_send");

	const submitMessage = async (e: SubmitEvent) => {
		e.preventDefault();

		if (messageStatus == "sent") return;

		setSubmitFallback(true);

		const form = e.currentTarget as HTMLFormElement;

		const success = await sendEmail(
			form.message.value,
			form.email.value, 
			form.first_name.value,
			form.last_name.value,
			form.subject.value
		);

		setSubmitFallback(null);
		
		if (success) setMessageStatus("sent");
		else return setMessageStatus("error");
	}

	const clearForm = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const { form } = e.currentTarget;

		form?.reset();
		setMessageStatus("to_send");
	}
	
	return (
		<bx.Box $width="100%" $padding="13px 15px" $gap="13px">
			<tx.P $size="xviii" $weight="450">Leave a message</tx.P>

			<wp.Col $pad="3px 9px" $gap="13px">
				<tx.P $opc={0.79}>Get in contact by sending me a direct message, I'll reply as soon as possible!</tx.P>
			</wp.Col>

			<FormProvider onSubmit={submitMessage}>
				<wp.Col $pad="0 9px 12px" $gap="13px">
					<wp.Row $gap="13px" $dSize={["100%"]} $breakAt={4}>
						<Input label="First Name" name="first_name" regex={nameRegexp} scaleToRoot $width="100%" placeholder="e.g. John" />

						<Input label="Last Name" name="last_name" regex={nameRegexp} scaleToRoot $width="100%" placeholder="e.g. Doe" />
					</wp.Row>

					<Input 
						label="Email" 
						name="email" 
						placeholder="e.g. john.doe@example.com" 
						required 
						regex={emailRegexp}
						regexTest={[{regex: emailTestRegexp, error: "This email isn't valid."}]} 
						scaleToRoot $width="100%" 
					/>

					<Input label="Subject" name="subject" scaleToRoot $width="100%" placeholder="e.g. I'd like to chat" />

					<Textarea 
						label="Message" 
						name="message" 
						placeholder="your message..." 
						required
						scaleToRoot $width="100%" $maxHeight="9lh" $resize="vertical" 
					/>
				</wp.Col>

				{messageStatus != "to_send" && 
					<>
						<wp.Division $orientation={1} $margin="13px 0" />
						<wp.Col $pad="9px 9px" $gap="3px">
							{messageStatus == "sent" && 
								<>
									<tx.P $weight="600" $colorPreset="text" $size="xvi" $opc={0.9}>
										SENT!
									</tx.P>
									<tx.P $weight="400" $opc={0.79}>
										Your message was sent successfully, I appreciate your attention on getting in contact. 
										<tx.Span $weight="500"> I'll return to you as soon as possible.</tx.Span>
									</tx.P>
								</>
							}
							{messageStatus == "error" && 
								<>
									<tx.P $weight="600" $colorPreset="text" $size="xvi" $opc={0.9}>
										ERROR :(
									</tx.P>
									<tx.P $colorPreset="redError" $weight="500">
										Sorry look like we have a problem here, please try again later.
									</tx.P>
								</>
							}
						</wp.Col>
						<wp.Division $orientation={1} $margin="13px 0" />
					</>
				}

				<wp.Row $fWrap="wrap" $gap="9px" $jc={messageStatus != "to_send" ? "space-between" : "flex-end"}>
					{messageStatus != "to_send" && 
						<ButtonLink clientRender type="button" href="/" btnProps={{$style: "ghost_link"}}>
							Back home
						</ButtonLink>
					}

					{messageStatus != "to_send" ?
						<Button type="button" onClick={clearForm}>
							{messageStatus == "sent" ? "Send another message" : "Try again"}
						</Button>
					:
						<Button $fullMaxWidth="79px" type="submit" {...(submitFallback != null ? {disabled: submitFallback} : {})}>
							{submitFallback ? "sending..." : "Send"}
						</Button>
					}
				</wp.Row>
			</FormProvider>
		</bx.Box>
	)
}