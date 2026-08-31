interface EmailNotificationTemplateProps {
  name?: string;
  email: string;
  subject?: string;
  message: string;
  previewText?: string;
}

export const EmailNotificationTemplate: React.FC<EmailNotificationTemplateProps> = ({ name, email, subject, message, previewText = '' }) => (
	<html lang="en">
		<head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Client message received</title>
			<style>
				{`
					.value {
						font-size: 16px;
					}

					.message-value {
						white-space: pre-wrap;
						word-break: break-word;
						font-family: inherit;
					}

					.value:empty::after {
						content: "empty";
						font-size: inherit;
						font-style: italic;
						opacity: 0.7;
					}
				`}
			</style>
		</head>
		<body>
			<div
				style={{
					display: 'none',
					maxHeight: 0,
					overflow: 'hidden',
					fontSize: '1px',
					lineHeight: '1px',
					color: '#ffffff',
					opacity: 0,
					visibility: 'hidden',
				}}
			>
			{previewText}
			</div>
			<div style={{ fontFamily: 'monospace', padding: 13 }}>
				<div style={{ position: 'relative', display: 'block', gap: 10 }}>
					<div style={{ whiteSpace: 'nowrap', fontSize: 14, margin: '0 0 3px', opacity: 0.7 }}>
						{'> NAME: '}
					</div>
					<span className="value">{name}</span>
				</div>
				<div style={{ position: 'relative', margin: '10px 0px 0px 0', display: 'block', gap: 10 }}>
					<div style={{ whiteSpace: 'nowrap', fontSize: 14, margin: '0 0 3px', opacity: 0.7 }}>
						{'> EMAIL: '}
					</div>
					<span className="value">{email}</span>
				</div>
				<div style={{ position: 'relative', margin: '10px 0px 0px 0', display: 'block', gap: 10 }}>
					<div style={{ whiteSpace: 'nowrap', fontSize: 14, margin: '0 0 3px', opacity: 0.7 }}>
						{'> SUBJECT: '}
					</div>
					<span className="value">{subject}</span>
				</div>
				<div style={{ position: 'relative', margin: '10px 0px 0px 0', display: 'block', gap: 10 }}>
					<div style={{ whiteSpace: 'nowrap', fontSize: 14, margin: '0 0 3px', opacity: 0.7 }}>
						{'> MESSAGE: '}
					</div>
					<div className="value message-value">{message}</div>
				</div>
			</div>
		</body>
	</html>
);