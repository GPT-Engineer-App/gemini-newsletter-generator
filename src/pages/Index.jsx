import { useState } from "react";
import { Heading, VStack } from "@chakra-ui/react";
import SearchBar from "../components/SearchBar";

const Index = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log(`Searching for: ${query}`);
  };

  return (
    <VStack spacing={8} align="center" mt={8}>
      <Heading>Newsletter Generator</Heading>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
    </VStack>
  );
};

export default Index;
