import Home from "./page/home";
import { Flex } from "theme-ui";

function App() {
  return (
    <Flex
      sx={{
        margin: "0% 16%",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Home />
    </Flex>
  );
}

export default App;
