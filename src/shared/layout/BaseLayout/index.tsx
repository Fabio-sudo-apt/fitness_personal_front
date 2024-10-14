import { ReactNode } from "react";
import HeaderContext from "../../components/HeaderContext";
import FooterContext from "../../components/FooterContext";
import { Box } from "@mui/material";

interface BodyContextProps {
    children: ReactNode;
    title: string;
}

function BaseLayout({ children, title }: BodyContextProps): JSX.Element {
    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            justifyContent="space-between" 
            alignItems="start" 
            height="100%"
        >
            <HeaderContext title={title} />
            <Box 
                width="100%" 
                flexGrow={2}>
                {children}
            </Box>
            <FooterContext />
        </Box>
    );
    
}


export default BaseLayout;