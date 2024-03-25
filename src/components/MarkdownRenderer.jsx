import { Box } from "@chakra-ui/react";

const MarkdownRenderer = ({ content }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="md" width="100%">
      {content}
    </Box>
  );
};

export default MarkdownRenderer;
