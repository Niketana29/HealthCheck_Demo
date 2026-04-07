import { padding } from "@mui/icons-material";
import { Box } from "@mui/material";
import Header from "../components/Header";
import OverallStatusCard from "../components/OverallStatusCard";
import ServicesList from "../components/ServicesList";
import ActionBar from "../components/ActionBar";

function HealthCheckDashboard(){

    return (
        <Box sx={{padding : 3}}>
            <Header/>
            <OverallStatusCard/>
            <ServicesList/>
            <ActionBar/>
        </Box>
    );

}

export default HealthCheckDashboard;