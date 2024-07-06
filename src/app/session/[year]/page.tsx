import { Year } from "./Year";
type PageProps = {
  params: {
    year: string;
  };
};
export default function (props: PageProps) {
  const { params } = props;
  return <Year {...params} />;
}
