import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme/theme";

const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
  
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              The purpose of creating the application?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            The purpose of creating the application was to demonstrate proficiency in working with the powerful and user-friendly Material UI library.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              How does it operate? 
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Since its primary objective is to showcase skills in working with the frontend part, this is the client-side of the application, and its interactivity is limited to the ability to switch between light and dark themes. The displayed data is implemented using a mock approach. I chose not to add a server-side part and not turn it into fullstack as I did not see the specific need for it in this case. You can view my full-stack production-ready applications on my website <a target="blank" style={{color: 'wheat',textDecoration: 'none'}} href="https://stankadyrov.com">stankadyrov.com </a> under the Projects section.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              What capabilities of the MUI library were utilized within this application?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To begin with, a custom theme was implemented here, which overrides the library's default color palette to match the design requirements. This allows for easy use of the required colors, and with a custom theme provider wrapper component, they will be accessible anywhere in the application. 
              Additionally, in this project, I also implemented the ability to switch between dark and light themes using MUI's capabilities.
              Also, I employed advanced customization by directly modifying the library's classes in cases where it couldn't be achieved through component attributes.
              Moreover, I implemented several functional tables using the MUI DataGrid component, which is often essential for displaying extensive linear data.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              What additional libraries were used here?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I also incorporated several interactive chart visualizations using the nivo library, displayed an interactive calendar using the fullcalendar library, and implemented a form with validation using Formik and the yup validator. This effectively covers a significant portion of data analytics tasks on the client side.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Where can I view the source code of the application?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can find it in my GitHub repository at the following link: <a target="blank" style={{color: 'wheat',textDecoration: 'none'}} href=" https://github.com/Stskdrv/dp-a">GitHub Repo</a>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  };
  
  export default Faq;