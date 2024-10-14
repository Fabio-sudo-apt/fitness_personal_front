import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { LightTheme } from './themes/Light';
import AppRoutes from '../routes';
import Menu from './layout/Menu';
import { DrawerProvider } from './contexts';

function App() {
    return (
        <ThemeProvider theme={LightTheme}>
            <BrowserRouter>
                <DrawerProvider>
                    <Menu>
                        <AppRoutes />
                    </Menu>
                </DrawerProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;