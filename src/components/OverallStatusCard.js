import { Card, CardContent, Typography } from "@mui/material";

function OverallStatusCard(){
    return(
        <Card sx={{marginBottom : 3}}>
            <CardContent>
                <Typography variant="h6" color="success.main">OVERALL SYSTEM STATUS</Typography>
                <Typography fontWeight="bold">HEALTHY</Typography>
            </CardContent>
        </Card>
    );

}

export default OverallStatusCard;