import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <>
      <TwitterFollowCard userName={"MarcosMartos"} name={"Marcos Martos"} />
      <TwitterFollowCard userName={"midudev"} name={"Miguel Ángel Durán"} />
    </>
  );
}
