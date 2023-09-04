import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing={true} userName={"MarcosMartos"}>
        Marcos Martos
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} userName={"midudev"}>
        Miguel Ángel Durán
      </TwitterFollowCard>
    </section>
  );
}
