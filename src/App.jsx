import { useState } from "react";
import Navbar from "./components/Navbar";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";


export default function App() {
  const [screen, setScreen] = useState("input");
  const [comparedCampaigns, setComparedCampaigns] = useState([]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F3F4F6",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Navbar />
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "40px 48px",
        }}
      >
        {screen === "input" && (
          <Screen1
            onGenerate={() => setScreen("output")}
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

      </div>
    </div>
  );
}
