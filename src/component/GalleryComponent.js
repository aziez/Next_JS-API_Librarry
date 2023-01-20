/* eslint-disable jsx-a11y/alt-text */
import { DownloadIcon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function GalleryComponent({ IM, USER, LINK, TAG, LIKES }) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={330}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        border={'solid'}
        borderColor={useColorModeValue(`${TAG}`,"gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box rounded={"lg"} mt={-12} pos={"relative"} height={"230px"}>
          <Image
            rounded={"md"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={IM}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"grey.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {TAG}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
           {USER}
          </Heading>
        </Stack>
        <Flex minWidth={"max-content"} alignItems="center" gap={2}>
          <Box p={2}>
            <Heading size={"md"} color={"gray.300"}>Likes: {LIKES}</Heading>
          </Box>
          <Spacer />
          <DownloadIcon boxSize={6} color={"gray.300"} />
          <StarIcon color={"gray.200"} />
        </Flex>
      </Box>
    </Center>
  );
}

export default GalleryComponent;
