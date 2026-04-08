// import { padding } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import Header from "../components/Header";
import OverallStatusCard from "../components/OverallStatusCard";
// import ServicesList from "../components/ServicesList";
import ActionBar from "../components/ActionBar";
import ServicesTable from "../components/ServicesTable";
import { useState } from "react";
import StatusSummaryStrip from "../components/SummaryStrip";

function HealthCheckDashboard() {
  const servicesData = [
    {
      serviceName: "API GATEWAY",
      status: "Operational",
      uptime: "99.99%",
      note: "",
    },
    {
      serviceName: "DATABASE",
      status: "Operational",
      uptime: "99.95%",
      note: "",
    },
    {
      serviceName: "AI ASSISTANT ENGINE",
      status: "Degraded",
      uptime: "98.21%",
      note: "High latency in EU region",
    },
    {
      serviceName: "AUTH SERVICE",
      status: "Operational",
      uptime: "100.00%",
      note: "",
    },
  ];

  const [statusFilter, setStatusFilter] = useState("ALL");

  const filteredServices = servicesData.filter((service) => {
    if (statusFilter === "ALL") return true;
    return service.status === statusFilter;
  });

  const totalServices = servicesData.length;

  const operationalCount = servicesData.filter(
    (service) => service.status === "Operational"
  ).length;

  const degradedCount = servicesData.filter(
    (service) => service.status === "Degraded"

  ).length;


  const downCount = servicesData.filter(
    (service) => service.status === "Down"
  ).length;

  return (
    <Box sx={{ padding: 3 }}>
      <Header />
      <OverallStatusCard />
      <StatusSummaryStrip
        total={totalServices}
        operational={operationalCount}
        degraded={degradedCount}
        down={downCount}/>

      <Box sx={{ mb: 2, display: "flex", gap: 1 }}>
        <Button
          variant={statusFilter === "ALL" ? "contained" : "outlined"}
          onClick={() => setStatusFilter("ALL")}
        >
          All
        </Button>

        <Button
          variant={statusFilter === "Degraded" ? "contained" : "outlined"}
          color="warning"
          onClick={() => setStatusFilter("Degraded")}
        >
          Degraded
        </Button>

        <Button
          variant={statusFilter === "Down" ? "contained" : "outlined"}
          color="error"
          onClick={() => setStatusFilter("Down")}
        >
          Down
        </Button>
      </Box>
      <ServicesTable data={filteredServices} />
      <ActionBar />
    </Box>
  );
}

export default HealthCheckDashboard;
