import { FC, ReactNode } from "react";
import { Header } from "@/components/header";
import { Heart } from "lucide-react";
import { Footer } from "@/components/footer";

type LandingProps = {
    children: ReactNode;
};

const LandingLayout: FC<LandingProps> = ({ children }) => {
    return (
        <>
            <div className="min-h-screen container">
                <Header />
                {children}
            </div>
            <Footer />
        </>
    );
};

export default LandingLayout;
