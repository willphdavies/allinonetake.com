import { Box, Card, CardContent, Typography } from "@mui/material";
import "./WordOfTheDay.scss";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export function WordOfTheDay() {
  return (
    <Card className="home-word-of-the-day">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Quote of the Day
        </Typography>
        <Typography className="cursive" variant="h5" component="div">
          Miles Davis
        </Typography>
        <Typography variant="body2">
          It's not about the notes you play, it's about the notes you{" "}
          <b>
            <span style={{ fontSize: "18px" }} className="cursive">
              don't
            </span>
          </b>{" "}
          play...
          <br />
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
