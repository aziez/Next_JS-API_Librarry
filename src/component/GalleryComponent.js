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
      </Box>
    </Center>
  );
}

export default GalleryComponent;
