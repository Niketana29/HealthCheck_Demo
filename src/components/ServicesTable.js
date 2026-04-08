import { Box, Chip, Typography } from "@mui/material";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

function ServicesTable({data = []}){
    const columns = [
        {
            header: "Service",
            accessorKey: "serviceName"
        },
        {
            header: "Status",
            accessorKey: "status",
            cell: (info) => {
                const value = info.getValue();

                if(value === "Operational"){
                    return <Chip label = "Operational" color="success" size="small"/>
                }

                if(value === "Degraded"){
                    return <Chip label= "Degraded" color="warning" size="small"/>

                }

                return <Chip label = "Down" color="error" size="small"/>
            }
        },
        {
            header: "Uptime",
            accessorKey: "uptime"
        },
        {
            header: "Notes",
            accessorKey: "note"
        }
    ];

    const table = useReactTable({data , columns , getCoreRowModel: getCoreRowModel()});

    return(
        
        <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Service Status
            </Typography>
            {table.getCoreRowModel().rows.map((row) => (
                <Box 
                    key={row.id}
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "3fr 2fr 2fr 3fr",
                        py : 2,
                        borderBottom: "1px solid #eee"}}
                >
                    {row.getVisibleCells().map((cell) => (
                        <Typography key={cell.id}>
                            {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                            )}
                        </Typography>
                    ))}
                    </Box>
            ))}
        </Box>

    );

}

export default ServicesTable;