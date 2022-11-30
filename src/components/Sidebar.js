import { Box } from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={1}
      p={1}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
