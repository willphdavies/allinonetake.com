import { Box } from "@mui/material";
type YearProps = {
  year: string;
};
export function Year(props: YearProps) {
  const { year } = props;
  return <Box>Year {year}</Box>;
}
