import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./Provider";
const inter = Inter({ subsets: ["latin"] });
import { AuthContextProvider } from "./_utils/auth-context";
export const metadata = {
  title: "Pricing King",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (

    <html lang="en" >
      <body>
        <Providers>
          <AuthContextProvider>
            <div>
              <Header></Header>
              {children}
            </div>
          </AuthContextProvider>
        </Providers>
      </body>

    </html >


  );
}
