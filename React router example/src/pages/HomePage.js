import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>My HomePage</h1>
      <p>
        Go to <Link to="products"> Products </Link> page
      </p>
    </>
  );
}

export default HomePage;
