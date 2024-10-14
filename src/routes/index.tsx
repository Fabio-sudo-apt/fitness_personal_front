import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import Patients from '../pages/Patient';
import Appointments from '../pages/Appointments';
import BaseLayout from '../shared/layout/BaseLayout';
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard, Group, CalendarMonth } from '@mui/icons-material';
import { useMediaQuery, useTheme } from "@mui/material";

function AppRoutes() {
    const { handleDrawerOptions, toggleDrawer } = useDrawerContext();

    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        handleDrawerOptions([
            {
                icon: Dashboard,
                text: "Dashboard",
                route: "/dashboard",
                onClick: smDown  ? toggleDrawer : undefined
            },
            {
                icon: Group,
                text: "Pacientes",
                route: "/patients",
                onClick: smDown  ? toggleDrawer : undefined
    
            },
            {
                icon: CalendarMonth,
                text: "Agendamentos",
                route: "/appointments",
                onClick: smDown  ? toggleDrawer : undefined
            }
        ])
    }, [handleDrawerOptions, smDown, toggleDrawer]);

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<BaseLayout title='Dashboard'><Home /></BaseLayout>} />
            <Route path="/patients" element={<BaseLayout title='Pacientes'><Patients /></BaseLayout>} />
            <Route path="/appointments" element={<BaseLayout title='Agendamentos'><Appointments /></BaseLayout>} />
        </Routes>
    );
}

export default AppRoutes;