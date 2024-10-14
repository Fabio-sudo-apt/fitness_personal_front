/* eslint-disable react-refresh/only-export-components */

import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";


interface IDrawerOptionsProps {
    icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
    text: string;
    route: string;
    onClick: (() => void) | undefined;
}

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
    drawerOptions: IDrawerOptionsProps[];
    handleDrawerOptions: (newDrawerOptions: IDrawerOptionsProps[]) => void;
}

const DrawerContext = createContext<IDrawerContextData>({
    isDrawerOpen: false,
    toggleDrawer: () => {},
    drawerOptions: [],
    handleDrawerOptions: () => {},
});

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

interface AppDrawerProviderProps {
    children: ReactNode;
}

export const DrawerProvider = ({ children }: AppDrawerProviderProps): JSX.Element => {
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const [drawerOptions, setDrawerOptions] = useState<IDrawerOptionsProps[]>([]);

    const toggleDrawer = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, [])

    const handleDrawerOptions = useCallback((newDrawerOptions: IDrawerOptionsProps[]) => {
        setDrawerOptions(newDrawerOptions);
    }, [])

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawer, handleDrawerOptions}}>
            {children}
        </DrawerContext.Provider>
    );
}