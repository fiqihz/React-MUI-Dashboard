import { Box } from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">Rightbar</Box>
    </Box>
  );
};

export default Rightbar;
