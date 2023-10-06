import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";

interface Props {
    title: string;
    subtitle: string;
}

const Header = ({ title, subtitle }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h4"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 3px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h6" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;