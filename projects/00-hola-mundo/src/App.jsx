import "./App.css";

export function App() {
  return (
    <article style={{ color: "#fff" }}>
      <header>
        <img
          src="https://unavatar.io/kikobeats?ttl=1h"
          alt="Avatar de un tipo"
        />
        <div>
          <strong>Marcos Martos</strong>
          <span>@MarcosMartos</span>
        </div>
      </header>

      <aside>
        <button>Seguir</button>
      </aside>
    </article>
  );
}
