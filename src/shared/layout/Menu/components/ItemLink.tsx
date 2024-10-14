import { ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export interface IItemLink {
    icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
    text: string;
    route: string;
    onClick: (() => void) | undefined;


    side?: 'left' | 'right';
    colorIcon?: 'inherit' | 'disabled' | 'action' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

export function ItemLink({ icon: Icon, route, text, onClick, side = 'left', colorIcon = 'primary' }: IItemLink) {

    const resolvedPath = useResolvedPath(route);

    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <Link to={route} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem disablePadding>
                <ListItemButton onClick={handleClick} selected={!!match}>
                    {side === 'left' && (
                        <ListItemIcon>
                            <Icon color= {colorIcon}/>
                        </ListItemIcon>
                    )}
                    <ListItemText primary={text} />
                    {side === 'right' && (
                        <ListItemIcon>
                            <Icon color= {colorIcon}/>
                        </ListItemIcon>
                    )}
                </ListItemButton>
            </ListItem>
        </Link>
    );
}
