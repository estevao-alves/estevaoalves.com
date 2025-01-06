import type {Metadata} from "next";
import {Poppins} from "next/font/google";

import "./styles/globals";
import {GlobalStyle} from "./styles/globals";
import StyledComponentsRegistry from "./styles/styleRegistry";
import {GoogleAnalytics} from "@next/third-parties/google";

const font = Poppins({
    subsets: ["latin"],
    weight: ["300", "500", "700", "900"],
    variable: "--font-family"
});

export const metadata: Metadata = {
    title: "Stay",
    description: "Full-Stack Developer and 3D Animator"
};

export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={font.className}>
        <StyledComponentsRegistry>
            {children}
            <GlobalStyle/>
        </StyledComponentsRegistry>
        </body>

        <GoogleAnalytics gaId="G-GR9NRM08DS"/>
        </html>
    );
}
