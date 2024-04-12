import Clicks from './clicks';

function Greet({ name }) {
  return <h1> Hello {name ? name : `user`}!</h1>;
}

export default function HomePage() {
  
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
      <Clicks />
      <Clicks/>
    </div>
  );
}

