import { Month } from "./Month";
type PageProps = {
  params: {
    year: string;
    month: string;
  };
};
export default function (props: PageProps) {
  const { params } = props;
  return <Month {...params} />;
}
