import { Box,Chip, Divider, Typography } from "@mui/material";

function ServiceCard({serviceName}){
    return(
        <div>
            <Box sx={{py : 2 , display : "flex" , justifyContent : "space-between"}}>
                <Typography>{serviceName}</Typography>
                <Chip label="Operational" color="success" size="small"></Chip>
            </Box>
            <Divider/>
        </div>
    );

}

export default ServiceCard;