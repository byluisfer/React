import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <div className="App">
      <TwitterFollowCard username="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>

      <TwitterFollowCard username="pheralb">Pablo Hernandez</TwitterFollowCard>
    </div>
  );
}
