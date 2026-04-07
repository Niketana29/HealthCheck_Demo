import { Card, CardContent, Chip, Typography } from "@mui/material";

function ServiceCard({serviceName}){
    return(
        <Card sx={{marginBottom : 1}}>
            <CardContent sx={{display: "flex" , justifyContent: "space-between"}}>
                <Typography>{serviceName}</Typography>
                <Chip label="Healthy" color="success" size="small"></Chip>
            </CardContent>
        </Card>
    );

}

export default ServiceCard;