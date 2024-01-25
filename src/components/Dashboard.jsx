import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const defaultTheme = createTheme();

export default function Dashboard() {
  const [quote, setQuote] = React.useState(null);
  React.useEffect(() => {
  axios
    .get(`${apiUrl}user/get-motivator`)
    .then(function (response) {
      if (response.data) {
        setQuote(response.data);
      } else {
        console.error("Empty response data");
      }
    })
    .catch(function (error) {
      console.error(error);
    });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            {quote?.quote}
          </Typography>
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: "500",
              marginTop:5
            }}
          >
            {quote?.writer}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
