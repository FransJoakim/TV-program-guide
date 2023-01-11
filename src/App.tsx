import { useContext } from "react";
import { ProgramContext } from "./lib/state";
import { ChannelMenuSidebar } from "./components/ChannelMenuSidebar";
import { Timeline } from "./components/Timeline";
import { Show } from "./components/Show";

function App() {
  const program = useContext(ProgramContext);

  const rootWidth = 20;
  const widthTotal = 24 * rootWidth;
  const channelLogoPadding = rootWidth / 3;

  return (
    <div className="h-full w-full text-white bg-stone-800 overflow-scroll">
      <div
        style={{ width: widthTotal + channelLogoPadding + "rem" }}
        className="h-full flex"
      >
        <ChannelMenuSidebar program={program} />
        <div>
          <Timeline rootWidth={rootWidth} />
          {program.map((channel) => (
            <div key={channel.id}>
              <div className="flex">
                {channel.schedules.map((show, index) => (
                  <Show show={show} rootWidth={rootWidth} key={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
