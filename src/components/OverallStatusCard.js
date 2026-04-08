import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";

function OverallStatusCard(){
    return(
        <Card sx={{marginBottom : 4}}>
            <CardContent>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h6">
                        All Systems are Operational
                    </Typography>

                    <Chip label = "Operational" color="success"></Chip>
                </Stack>

                <Typography variant="body2" color="text.secondary" sx={{marginTop : 1}}>
                    No incidents reported. All services are running normally.
                </Typography>

            </CardContent>
        </Card>
    );

}

export default OverallStatusCard;