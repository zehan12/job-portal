import { FC, ReactNode } from "react";
import { Header } from "@/components/layout/header/index";
import { Heart } from "lucide-react";
import { Footer } from "@/components/layout/footer";

type LandingProps = {
    children: ReactNode;
};

const LandingLayout: FC<LandingProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="min-h-screen container">{children}</div>
            <Footer />
        </>
    );
};

export default LandingLayout;
