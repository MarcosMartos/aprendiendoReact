import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const users = [
    {
      userName: "MarcosMartos",
      name: "Marcos Martos",
      isFollowing: false,
    },
    {
      userName: "midudev",
      name: " Miguel Ángel Durán",
      isFollowing: false,
    },
    {
      userName: "EnzoxxB",
      name: "Enzo Balderrama",
      isFollowing: false,
    },
    {
      userName: "MatiasIkaczijk",
      name: "Matías Ikaczijk",
      isFollowing: false,
    },
  ];

  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
