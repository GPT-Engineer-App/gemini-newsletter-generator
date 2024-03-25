import { useState } from "react";
import { Heading, VStack, Spacer } from "@chakra-ui/react";
import SearchBar from "../components/SearchBar";
import MarkdownRenderer from "../components/MarkdownRenderer";

const Index = () => {
  const [query, setQuery] = useState("");
  const [markdownContent, setMarkdownContent] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    const response = await fetch(`/api/generate?query=${encodeURIComponent(query)}`);
    try {
      const data = await response.text();
      setMarkdownContent(data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack spacing={8} align="stretch" m={8}>
      <VStack spacing={4} align="center">
        <Heading>Newsletter Generator</Heading>
        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} isLoading={isLoading} />
      </VStack>
      <Spacer />
      <MarkdownRenderer content={markdownContent} />
    </VStack>
  );
};

export default Index;
