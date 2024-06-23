import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import Sidebar from "./components/Sidebar";

const Container = styled.div`
  background: ${({theme})=>theme.bg};
  width: 100%;
  height: 100vh; 
`;

function App() {
  //hooks
  const [darkMode, SetDarkMode] = useState(true);


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
     <Container>
      <Sidebar />
      PodWave
     </Container>
    </ThemeProvider>
  );
}

export default App;