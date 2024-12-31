import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "도커 테스트",
	description: "도커 테스트중",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body>{children}</body>
		</html>
	);
}
