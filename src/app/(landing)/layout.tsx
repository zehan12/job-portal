import { FC, ReactNode } from "react";
import { Header } from "@/components/header";

type LandingProps = {
    children: ReactNode;
};

const LandingLayout: FC<LandingProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default LandingLayout;