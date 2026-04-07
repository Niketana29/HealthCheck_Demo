import { Box } from "@mui/material";
import ServiceCard from "./ServiceCard";

function ServicesList(){
    return(
        <Box sx={{marginBottom : 3}}>
            <ServiceCard serviceName="BACKEND API"/>
            <ServiceCard serviceName="DATABASE"/>
            <ServiceCard serviceName="AI ASSISTANT ENGINE"/>
            <ServiceCard serviceName="AUTH SERVICE"></ServiceCard>
        </Box>

    );

}
export default ServicesList;