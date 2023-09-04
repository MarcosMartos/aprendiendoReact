import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formattedUserName = <span>@algo</span>;

  return (
    <section className="App">
      <TwitterFollowCard
        formattedUserName={formattedUserName}
        isFollowing={true}
        userName={"MarcosMartos"}
        name={"Marcos Martos"}
      />
      <TwitterFollowCard
        formattedUserName={formattedUserName}
        isFollowing={false}
        userName={"midudev"}
        name={"Miguel Ángel Durán"}
      />
    </section>
  );
}
