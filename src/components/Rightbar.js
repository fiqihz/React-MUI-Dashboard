import { Box } from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      bgcolor="indigo"
      flex={2}
      p={1}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
