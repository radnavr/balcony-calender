import "./App.css";
import Card from "./Card";

function App() {
  const baseLine = new Date("March 11, 2024 00:00:00").getTime(); // 23
  const weekDuration = 604800000;
  const today = new Date();
  const dayInd = new Date().getDay() > 0 ? new Date().getDay() : 7;
  const now = today.getTime();

  const getLineUp = () => {
    const weeksPassed = (now - baseLine) / weekDuration;
    const remainder = weeksPassed % 3;

    if (remainder > 2) return [24, 22, 23];
    if (remainder < 1) return [22, 23, 24];
    return [23, 24, 22];
  };

  const getSpanLimit = (spec) => {
    const dateMs = new Date().setDate(today.getDate() + (spec - dayInd));
    return `${new Date(dateMs).getDate()}. ${new Date(dateMs).getMonth() + 1}.`;
  };

  const queue = [
    {
      apartment: getLineUp()[0],
      cue: "minulý týden",
      isActive: false,
      span: `${getSpanLimit(-6)} - ${getSpanLimit(0)}`,
    },
    {
      apartment: getLineUp()[1],
      cue: "tento týden",
      isActive: true,
      span: `${getSpanLimit(1)} - ${getSpanLimit(7)}`,
    },
    {
      apartment: getLineUp()[2],
      cue: "příští týden",
      isActive: false,
      span: `${getSpanLimit(8)} - ${getSpanLimit(14)}`,
    },
  ];

  return (
    <main>
      {queue.map((item) => (
        <Card
          key={item.apartment}
          apartment={item.apartment}
          cue={item.cue}
          isActive={item.isActive}
          span={item.span}
        />
      ))}
    </main>
  );
}

export default App;
