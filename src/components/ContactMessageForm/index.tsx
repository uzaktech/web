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
import { useTranslations } from "next-intl";

export const ContactMessageForm = () => {
	const t = useTranslations("contactPage.form");
	const [submitFallback, setSubmitFallback] = useState<boolean | null>(null);
	const [messageStatus, setMessageStatus] = useState<"to_send" | "sent" | "error">("to_send");

	const submitMessage = async (e: SubmitEvent) => {
		e.preventDefault();

		if (messageStatus == "sent") return;
		
		let success = false;

		try {
			setSubmitFallback(true);

			const form = e.currentTarget as HTMLFormElement;

			success = await sendEmail(
				form.message.value,
				form.email.value, 
				form.first_name.value,
				form.last_name.value,
				form.subject.value
			);

			setSubmitFallback(null);
		}
		catch {
			success = false;
		}
		
		if (success) setMessageStatus("sent");
		else return setMessageStatus("error");
	};

	const clearForm = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const { form } = e.currentTarget;

		form?.reset();
		setMessageStatus("to_send");
	};
	
	return (
		<bx.Box $width="100%" $padding="13px 15px" $gap="13px">
			<tx.P $size="xviii" $weight="450">{t("title")}</tx.P>

			<wp.Col $pad="3px 9px" $gap="13px">
				<tx.P $opc={0.79}>{t("description")}</tx.P>
			</wp.Col>

			<FormProvider onSubmit={submitMessage}>
				<wp.Col $pad="0 9px 12px" $gap="13px">
					<wp.Row $gap="13px" $dSize={["100%"]} $breakAt={4}>
						<Input label={t("firstName")} name="first_name" regex={nameRegexp} scaleToRoot $width="100%" placeholder={t("firstNamePlaceholder")} />

						<Input label={t("lastName")} name="last_name" regex={nameRegexp} scaleToRoot $width="100%" placeholder={t("lastNamePlaceholder")} />
					</wp.Row>

					<Input 
						label={t("email")} 
						name="email" 
						placeholder={t("emailPlaceholder")} 
						required 
						regex={emailRegexp}
						regexTest={[{regex: emailTestRegexp, error: t("emailError")}]} 
						scaleToRoot $width="100%" 
					/>

					<Input label={t("subject")} name="subject" scaleToRoot $width="100%" placeholder={t("subjectPlaceholder")} />

					<Textarea 
						label={t("message")} 
						name="message" 
						placeholder={t("messagePlaceholder")} 
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
										{t("sentTitle")}
									</tx.P>
									<tx.P $weight="400" $opc={0.79}>
										{t("sentDesc")}{" "}
										<tx.Span $weight="500">{t("sentNotice")}</tx.Span>
									</tx.P>
								</>
							}
							{messageStatus == "error" && 
								<>
									<tx.P $weight="600" $colorPreset="text" $size="xvi" $opc={0.9}>
										{t("errorTitle")}
									</tx.P>
									<tx.P $colorPreset="redError" $weight="500">
										{t("errorDesc")}
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
							{t("backHome")}
						</ButtonLink>
					}

					{messageStatus != "to_send" ?
						<Button type="button" onClick={clearForm}>
							{messageStatus == "sent" ? t("sendAnother") : t("tryAgain")}
						</Button>
					:
						<Button $fullMaxWidth="79px" type="submit" {...(submitFallback != null ? {disabled: submitFallback} : {})}>
							{submitFallback ? t("sending") : t("send")}
						</Button>
					}
				</wp.Row>
			</FormProvider>
		</bx.Box>
	);
};
