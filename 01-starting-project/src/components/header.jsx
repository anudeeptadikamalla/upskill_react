import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="investment header logo" />
      <h1>React Investment caluclator</h1>
    </header>
  );
}
