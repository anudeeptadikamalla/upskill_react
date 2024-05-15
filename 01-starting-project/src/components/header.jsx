import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="React logo" />
      <h1>React Investment caluclator</h1>
    </header>
  );
}
