import Description from "./component/Description/Description";
import Feedback from "./component/Feedback/Feedback";
import Options from "./component/Options/Options";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Description />
        <Options />
        <Feedback />
      </div>
    </div>
  );
}

export default App;
