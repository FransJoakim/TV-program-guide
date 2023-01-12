import { ChannelSidebar } from "./components/ChannelSidebar";
import { Timeline } from "./components/Timeline";
import { Program } from "./components/Program";
import { TimeTracker } from "./components/TimeTracker";
import { useContext, useEffect, useRef, useState } from "react";
import { TimeContext } from "./lib/state";

function App() {
  const rootWidth = 20;
  const channelLogoPadding = rootWidth / 3;
  const ref = useRef<HTMLDivElement>(null);
  const currentTime = useContext(TimeContext);
  const currentPosition = (24 * rootWidth) / (2400 / currentTime);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const scrollToCurrent = () => {
    if (ref.current)
      ref.current.scrollTo({
        top: 100,
        left:
          currentPosition * 16 -
          window.innerWidth / 2 +
          (channelLogoPadding * 16) / 2,
        behavior: "smooth",
      });
  };

  useEffect(() => {
    scrollToCurrent();
    document.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div
      ref={ref}
      className="h-full w-full text-white bg-stone-800 overflow-scroll"
    >
      <div
        style={{ width: 24 * rootWidth + channelLogoPadding + "rem" }}
        className="h-full flex"
      >
        <ChannelSidebar />
        <div className="relative">
          <Timeline rootWidth={rootWidth} />
          <TimeTracker rootWidth={rootWidth} />
          <Program rootWidth={rootWidth} />
        </div>
      </div>
      <button
        onClick={() => scrollToCurrent()}
        style={{
          right: windowWidth / 10 + "px",
          bottom: window.innerHeight / 15 + "px",
        }}
        className="fixed p-4 rounded-lg text-xl bg-orange-400"
      >
        NOW
      </button>
    </div>
  );
}

export default App;
