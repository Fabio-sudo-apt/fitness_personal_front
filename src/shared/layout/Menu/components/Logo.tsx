import { Box, Theme, Typography } from "@mui/material";

interface ILogoProps {
    theme: Theme;
}

export function Logo({ theme }: ILogoProps): JSX.Element {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" width="100%" height={theme.spacing(10)}>
            <Typography margin={0} variant="h4" gutterBottom fontWeight="bold">
                LOGO
            </Typography>
        </Box>
    )
}