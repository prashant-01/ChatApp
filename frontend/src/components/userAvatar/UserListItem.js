import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      fontWeight="medium"
      overflow="hidden"
      cursor="pointer"
      bg="#f0f0f0"
      _hover={{
        background: "#00c8ff",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text fontSize="md" textTransform="capitalize">
          {user.name}
        </Text>
        <Text fontSize="xs">
          <b>Email</b> :{user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
