import { Box, List } from "@mui/material";
import { ItemLink, IItemLink } from "./ItemLink";

interface IListLink {
    links: IItemLink[];
}

export function ListLink({ links }: IListLink): JSX.Element {
    return (
        <Box>
            <Box flex={1}>
                <List component="nav">
                    {links.map((link, index) => (
                        <ItemLink
                            key={index}
                            icon={link.icon}
                            text={link.text}
                            route={link.route}
                            onClick={link.onClick}
                            side="left"
                        />
                    ))}
                </List>
            </Box>
        </Box>

    );
}