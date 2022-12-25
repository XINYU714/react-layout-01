import Nav from "./components/Nav";
import { Hero } from "./components/Hero";
import Card from "./components/Card";
import { CardWrapStyled } from "./components/styles/Card.styled";
import GlobalStyle from "./components/styles/Global.styled";
import Data from "./data";
function App() {
  //use map to load all data
  const cardData = Data.map((element) => {
    return (
      <Card
        key={element.id}
        {...element} //id 以下的值
      />
    );
  });
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Hero />
      <CardWrapStyled>
        {cardData}
        {cardData}
        {cardData}
      </CardWrapStyled>
    </div>
  );
}

export default App;
