import { useEffect, useState } from "react";

function Greet({ name }) {
  return <h1> Hello {name ? name : `user`}!</h1>;
}

export default function HomePage() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    alert(`You have clicked ${clicks} number of times!`);
  });
  const options = [
    "good morning",
    "good afternoon",
    "good evening",
    "good night",
  ];
  return (
    <div>
      <Greet name="React" />
      {options.map((option) => (
        <h1>{option}</h1>
      ))}
      <button onClick={() => setClicks(clicks + 1)} disabled={clicks >= 3}>
        total clicks - {clicks}
      </button>
    </div>
  );
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
