import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard initialIsFollowing={false} userName={"MarcosMartos"}>
        Marcos Martos
      </TwitterFollowCard>
      <TwitterFollowCard initialIsFollowing={false} userName={"midudev"}>
        Miguel Ángel Durán
      </TwitterFollowCard>
    </section>
  );
}
