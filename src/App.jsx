import { useState } from "react";
import Navbar from "./components/Navbar";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import HowItWorks from "./components/HowItWorks";

export default function App() {
  const [screen, setScreen] = useState("input"); // "input" | "output" | "compare" | "how"
  const [comparedCampaigns, setComparedCampaigns] = useState([]);

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Navbar />

      <div className="mx-auto max-w-3xl px-6 py-12">
        {screen === "input" && (
          <Screen1
            onGenerate={() => setScreen("output")}
            onHowItWorks={() => setScreen("how")}
          />
        )}

        {screen === "output" && (
          <Screen2
            onBack={() => setScreen("input")}
            onCompare={(selected) => {
              setComparedCampaigns(selected);
              setScreen("compare");
            }}
          />
        )}

        {screen === "compare" && (
          <Screen3
            selectedCampaigns={comparedCampaigns}
            onBack={() => setScreen("output")}
          />
        )}

        {screen === "how" && (
          <HowItWorks onBack={() => setScreen("input")} />
        )}
      </div>
    </div>
  );
}
