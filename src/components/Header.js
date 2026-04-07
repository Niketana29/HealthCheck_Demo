import { Box, Chip, Typography } from "@mui/material";

function Header(){
    return(
        <Box sx={{marginBottom : 3}}>
            <Typography variant="h5" fontWeight="bold">
                SMART ASSISSTANT - SYSTEM HEALTH
            </Typography>
            {/* <Chip label="DEV" size="small" sx={{marginTop : 1}}></Chip> */}
        </Box>
    );

}

export default Header;