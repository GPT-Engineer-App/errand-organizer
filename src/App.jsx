import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Link, Heading } from '@chakra-ui/react';
import Index from "./pages/Index.jsx";

const Header = () => (
  <Box bg="brand.800" p={4} color="white">
    <Flex justify="space-between" align="center" maxW="container.xl" m="0 auto">
      <Heading as="h1" size="lg">My Tasks</Heading>
      <Box>
        <Link href="/" p={2}>Home</Link>
        <Link href="/about" p={2}>About</Link>
        <Link href="/contact" p={2}>Contact</Link>
      </Box>
    </Flex>
  </Box>
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;