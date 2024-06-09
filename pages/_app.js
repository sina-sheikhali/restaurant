import BackTopBtn from "@/components/modules/BackTopBtn/BackTopBtn";
import Footer from "@/components/modules/Footer/Footer";
import Header from "@/components/modules/Header/Header";

import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <BackTopBtn />
      <Footer />
      <Toaster />
    </>
  );
}
