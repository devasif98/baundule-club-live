import AllProvider from "@/providers/AllProvider";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Baundule Club",
  description: " Let’s go anywhere!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AllProvider>
          {children}
          <Toaster />
        </AllProvider>
      </body>
    </html>
  );
};
export default RootLayout;
