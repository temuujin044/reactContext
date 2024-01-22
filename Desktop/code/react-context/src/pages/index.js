import { Header, Left, Right } from "@/components";

const data = {
  guestion: {
    title: "The useState set method is not reflecting a change immediately",
    detail:
      "How to push element inside useState array React hook? Is that as an old method in react state?",
  },
  answers: [
    {
      text: "Even if you add a setTimeout the function, though the timeout will run after som .",
      rating: 10,
    },
    {
      text: "Even if you add a setTimeout the function, though the timeout will ru .",
      rating: 9,
    },
    {
      text: "Even if you add a setTimeout the function, though the timeout will run after  .",
      rating: 7,
    },
    {
      text: "Even if you add a setTimeout the function, though the timeout will run a .",
      rating: 6,
    },
  ],
};

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Left />
        <Right data={data} />
      </div>
    </div>
  );
}
