import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Page = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Sidebar />
      <Footer />
    </div>
  );
};
