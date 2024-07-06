import { Session } from "./Session";
type PageProps = {
  params: {
    year: string;
    month: string;
    day: string;
  };
};
export default function (props: PageProps) {
  const { params } = props;
  return <Session {...params} />;
}
