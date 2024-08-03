import StartupFunctions from "./functions/startup/StartupFunctions";
import RouterAR7 from "./router/RouterAR7";
import "/src/css/main/main-css-ar7.css";

const App = () => {
  return (
    <>
      <RouterAR7 />
      <StartupFunctions />
    </>
  );
};

export default App;
