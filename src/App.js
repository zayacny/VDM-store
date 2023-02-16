import logo from "./logo.svg";
import movieComponentImage from "./components/images/topgun.jpg";
import "./App.css";
import Movie from "./components/Movie";
import Footer from "./components/Footer";

function App() {
  const movie = {
    img: movieComponentImage,
    name: "Топ Ган: Мэверик",
    originalName: "Top Gun: Maverick",
    rateImdb: 8.3,
    year: 2022,
    country: "США",
    director: "Джозеф Косински",
    genre: "Боевики",
    duration: "02:10:32",
    storyLine:
      "Пит Митчелл - один из лучших пилотов, которому дали прозвище Мэверик. Он уже тридцать лет занимается любимым делом, но так и остается инструктором. Герой и сам не заинтересован в повышении по службе, поскольку это помешает ему проводить много времени за штурвалом самолета. В очередной группе новобранцев оказывается лейтенант Брэдли Брэдшоу, сын Ника Брэдшоу. С этого момента Питу предстоит сильно постараться, чтобы справиться с давними переживаниями. Он просто не имеет права отвлекаться от работы, поскольку ему необходимо отобрать группу лучших пилотов для выполнения особо важного задания...",
  };

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </header>

      <main className="App-main">
        <Movie {...movie} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
