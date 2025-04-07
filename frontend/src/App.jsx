import { Box} from "@chakra-ui/react";
import { useColorModeValue } from './components/ui/color-mode';
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage.jsx";
import Homepage from "./pages/Homepage.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  
  return (
    <Box minH={'100vh'} bg={useColorModeValue("gray.200", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;