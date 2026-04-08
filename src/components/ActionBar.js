import { Box, Button, Stack, Switch, Typography } from "@mui/material";

function ActionBar(){

    return(
        <Box sx={{marginTop : 4}}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" spacing={1} alignItems="center">
                    <Switch/>
                    <Typography variant="body2">AUTO REFRESH</Typography>
                </Stack>

                <Button variant="outlined">Subscribe for updates</Button>
            </Stack>
        </Box>
    );

}
export default ActionBar;