import "./TitleBar.css";

function TitleBar() {
  return (
    <header className="titlebar">
        <div className="avatar">
            <img src="https://picsum.photos/300" alt="Profile" />
        </div>
      <h1>Kelvyn Dantas</h1>
    </header>
  );
}

export default TitleBar;
