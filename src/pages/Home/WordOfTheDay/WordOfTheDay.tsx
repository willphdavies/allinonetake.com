import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./WordOfTheDay.scss";
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
export function WordOfTheDay() {
  return (
    <Card className="home-word-of-the-day">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography className="cursive" variant="h5" component="div">
          spon{bull}ta{bull}ne{bull}ous
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          performed or occurring as a result of a sudden inner impulse or inclination and without premeditation or external stimulus.
          <br />
          <br />
          <span className="cursive">{'"the audience broke into spontaneous applause"'}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}