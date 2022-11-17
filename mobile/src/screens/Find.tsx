import { VStack, Heading } from "native-base";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Find() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por código" showBackButton />

      <VStack mt={8} mx={5} alignItems="center">
        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          mb={8}
          textAlign="center"
        >
          Encontrar o bolão através de seu código único
        </Heading>

        <Input mb={2} placeholder="Qual é o código do seu bolão?"></Input>

        <Button title="BUSCAR BOLÃO" />
      </VStack>
    </VStack>
  );
}
