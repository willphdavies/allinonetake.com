import { Card, CardContent, Typography } from "@mui/material";
import "./WordOfTheDay.scss";
export function WordOfTheDay() {
  return (
    <Card className="home-word-of-the-day">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Quote of the Day
        </Typography>
        <Typography className="cursive" variant="h5" component="div">
          Joe Mishkin
        </Typography>
        <Typography variant="body2">
          Music is a{" "}
          <i>
            <span style={{ fontSize: "18px" }}>conversation</span>
          </i>{" "}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
