import { AppBar, Badge, Box, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext } from "../../contexts";
import { Menu, Notifications, AccountCircle } from "@mui/icons-material";

interface HeaderContextProps {
    title: string;
}

function HeaderContext({ title }: HeaderContextProps): JSX.Element {

    const fontSizeIconAppBar = '2.5rem';

    const { toggleDrawer } = useDrawerContext();

    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box display="flex" alignItems="center" justifyContent="center" width="100%" bgcolor="red">
            <AppBar position="static" sx={{ width: '100%', flex: 1}} color="inherit" elevation={0}>
                <Toolbar sx={{ minHeight: '50px' }}>
                    {smDown && (
                        <IconButton onClick={toggleDrawer} edge="start" color="inherit" aria-label="menu">
                            <Menu sx={{ fontSize: fontSizeIconAppBar }} />
                        </IconButton>
                    )}
                    <Typography variant="h4" fontWeight="bold" component="div" sx={{ flexGrow: 1, textAlign: smDown ? 'center' : 'left' }}>
                        {title}
                    </Typography>

                    <Box>
                        <IconButton>
                            <Badge badgeContent={17} color="error">
                                <Notifications sx={{ fontSize: fontSizeIconAppBar }} color="primary" />
                            </Badge>
                        </IconButton>
                    </Box>

                    <Box>
                        <IconButton>
                            <AccountCircle sx={{ fontSize: fontSizeIconAppBar }} color="primary" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeaderContext;