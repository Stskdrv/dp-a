import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { mockVidgetData } from "../../data/mockData";
import Header from "../../components/Header";
import { DownloadOutlinedIcon } from "../../icons/icons";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import ProgressCircle from "../../components/ProgressCircle";
import { tokens } from "../../theme/theme";
import StatBox from "../../components/StatBox";
import { dynamicIcons } from "../../data/mockData";
import RecentTransactions from "./RecentTransactions";
import {v4} from 'uuid';

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>

            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {
                    mockVidgetData.map((item) => {
                        const Icon = dynamicIcons[item.icon] as React.ComponentType<{ sx?: any }>;
                        return (
                            <Box
                            key={v4()}
                            gridColumn="span 3"
                            bgcolor={colors.primary[400]}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <StatBox
                                title={item.title}
                                subtitle={item.subtitle}
                                progress={item.progress}
                                increase={item.increase}
                                icon={
                                    <Icon
                                        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                    />
                                }
                            />
                        </Box>
                        )
                    })
                }


                {/* ROW 2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    bgcolor={colors.primary[400]}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
                <RecentTransactions />

                {/* ROW 3 */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    bgcolor={colors.primary[400]}
                    p="30px"
                >
                    <Typography variant="h5" fontWeight="600">
                        Campaign
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                    >
                        <ProgressCircle size={125} />
                        <Typography
                            variant="h5"
                            color={colors.greenAccent[500]}
                            sx={{ mt: "15px" }}
                        >
                            $48,352 revenue generated
                        </Typography>
                        <Typography>Includes extra misc expenditures and costs</Typography>
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    bgcolor={colors.primary[400]}
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ padding: "30px 30px 0 30px" }}
                    >
                        Sales Quantity
                    </Typography>
                    <Box height="250px" mt="-20px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    bgcolor={colors.primary[400]}
                    padding="30px"
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ marginBottom: "15px" }}
                    >
                        Geography Based Traffic
                    </Typography>
                    <Box height="200px">
                        <GeographyChart isDashboard={true} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;