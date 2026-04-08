import { Box, Card, Stack, Typography } from "@mui/material";

function StatusSummaryStrip({ total, operational, degraded, down }) {

    return(
        <Card sx={{marginBottom : 3}}>
            <Box sx={{padding : 2}}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <SummaryItem label="Total Services" value={total}/>
                    <SummaryItem label="Operational Services" value={operational} color="success.main"/>
                    <SummaryItem label="Degraded Services" value={degraded} color="warning.main"/>
                    <SummaryItem label="Down Services" value={down} color="error.main"/>
                </Stack>
            </Box>
        </Card>

    );
}

function SummaryItem({label , value , color}){

    return(
        <Box textAlign="center">
            <Typography variant="h6" fontWeight="600" color={color ?? "textPrimary"}>{value}</Typography>
            <Typography variant="caption" color="textSecondary">{label}</Typography>
        </Box>

    );


}

export default StatusSummaryStrip;
