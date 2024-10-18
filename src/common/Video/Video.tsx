import { Paper } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import seedrandom from "seedrandom";
import "./Video.scss";

type VideoProps = {
  items: string[];
};
export function Video(props: VideoProps) {
  const { items } = props;
  const [randomized, setRandomized] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    setRandomized(randomizeList(items));
  }, [items]);
  return (
    <Paper className="video">
      {randomized.map(
        (item, index) =>
          currentIndex === index && (
            <video
              ref={ref}
              preload="auto"
              className="video__player"
              key={index}
              src={item}
              autoPlay={true}
              onEnded={playNext}
            />
          )
      )}
    </Paper>
  );
  function playNext() {
    const total = items.length;
    if (currentIndex < total - 1) {
      setCurrentIndex(currentIndex + 1);
      return;
    }
    setCurrentIndex(0);
    setRandomized(randomizeList(items));
  }
}
function randomizeList(list: string[]) {
  const newList = [...list];
  const rand = seedrandom(Date.now().toString());
  return newList.sort(() => rand() - 0.5);
}
