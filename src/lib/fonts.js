import localFont from "next/font/local";
import { Poppins } from "next/font/google";
export const Simula = localFont({
  src: "./../app/fonts/Simula_Book_ImfTVa3.ttf",
});

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
