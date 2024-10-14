import { Box } from "@mui/material";
import TableComponents from "./components/Table";
import "./style.css"



function Patients(): JSX.Element  {

    // const theme = useTheme();

    return (
        <Box padding={1} display="flex" flexDirection="column">
            <TableComponents />
        </Box>
    );
}

export default Patients;