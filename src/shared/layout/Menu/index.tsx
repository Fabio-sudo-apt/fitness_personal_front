import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext } from "../../contexts";
import { Logo, ListLink, ItemLink } from './components/index'
import { ExitToApp as menuIcon } from "@mui/icons-material";

interface IMenu {
    children: React.ReactNode;
}

function Menu({ children }: IMenu): JSX.Element {

    const { isDrawerOpen, toggleDrawer, drawerOptions } = useDrawerContext();

    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawer}>
                <Box width={theme.spacing(30)} display="flex" flexDirection="column" height="100%">
                    <Box display="flex" alignItems="center">
                        <Logo theme={theme} />
                    </Box>
                    <ListLink links={drawerOptions} />
                </Box>
                <Box>
                    <ItemLink 
                    icon={menuIcon} 
                    text={"Sair"} 
                    route={"/login"} 
                    onClick={()=>{}} 
                    side="right"
                    colorIcon="error"
                    />
                    
                </Box>
            </Drawer>

            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(30)}>
                {children}
            </Box>
        </>

    );
}

export default Menu;