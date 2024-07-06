import { Suspense } from "react";
import { Search } from "./Search";

export default function () {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}
