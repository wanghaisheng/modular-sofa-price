import { Inter } from "next/font/google";
import "../../globals.css";
import Sidebar from "./components/sidebar";
import Providers from "../../Provider";
const inter = Inter({ subsets: ["latin"] });
import { Suspense } from 'react'
export const metadata = {
    title: "Pricing King",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <Suspense>
            <div className="grid grid-cols-[10%_90%]">
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div>{children}</div>
            </div>
        </Suspense>


    );
}
