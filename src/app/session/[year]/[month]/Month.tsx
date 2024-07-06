import { Box } from "@mui/material";
type MonthProps = {
  month: string;
  year: string;
};
export function Month(props: MonthProps) {
  const { month, year } = props;
  return (
    <Box>
      Month {month} {year}
    </Box>
  );
}
