import { Sidebar } from "./components/Sidebar";
import { Timeline } from "./components/Timeline";
import { Program } from "./components/Program";
import { TimeTracker } from "./components/TimeTracker";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { TimeContext } from "./lib/state";
import { NowButton } from "./components/NowButton";

function App() {
  const rootWidth = 20;
  const ref = useRef<HTMLDivElement>(null);
  const currentTime = useContext(TimeContext);
  const currentPosition = (24 * rootWidth) / (2400 / currentTime);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let sidebarWidth = windowWidth / 8;
  if (sidebarWidth < 100) sidebarWidth = 100;

  const scrollToCurrent = useCallback(() => {
    if (ref.current)
      ref.current.scrollTo({
        top: 0,
        left: currentPosition * 16 - window.innerWidth / 2 + sidebarWidth / 2,
        behavior: "smooth",
      });
  }, [currentPosition, sidebarWidth]);

  useEffect(() => {
    scrollToCurrent();
    window.addEventListener("resize", () => {
      scrollToCurrent();
      setWindowWidth(window.innerWidth);
    });
  }, [scrollToCurrent]);

  return (
    <div
      ref={ref}
      className="h-full w-full text-white bg-background overflow-scroll"
    >
      <div
        style={{ width: 24 * rootWidth + sidebarWidth / 16 + "rem" }}
        className="h-full flex"
      >
        <Sidebar padding={sidebarWidth} />
        <div className="relative">
          <Timeline rootWidth={rootWidth} />
          <TimeTracker rootWidth={rootWidth} />
          <Program rootWidth={rootWidth} />
        </div>
        <NowButton scrollToCurrent={scrollToCurrent} />
      </div>
    </div>
  );
}

export default App;
