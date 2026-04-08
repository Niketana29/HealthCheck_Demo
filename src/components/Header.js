import { Box, Chip, Stack, Typography } from "@mui/material";

function Header(){
    return(
        <Box sx={{marginBottom : 4}}>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="h4" fontWeight="600">
                    SMART ASSISTANT - SYSTEM HEALTH
                </Typography>
                
                <Chip label="ENV: DEV" size="small" sx={{marginTop : 1} } color="default"></Chip>
            </Stack>

            <Typography variant="body2" color="text.secondary" sx={{marginTop : 1}}>
                Current status of Smart Assistant Services
            </Typography>

        </Box>
    );

}

export default Header;