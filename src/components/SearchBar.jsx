import { Button, Input, HStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ query, setQuery, onSearch, isLoading }) => {
  return (
    <HStack>
      <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter your query..." />
      <Button onClick={onSearch} colorScheme="blue" leftIcon={<FaSearch />} isLoading={isLoading} isDisabled={isLoading}>
        Search
      </Button>
    </HStack>
  );
};

export default SearchBar;
