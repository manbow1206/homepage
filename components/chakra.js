import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import { theme } from "../libs/theme";

export default function Chakra({ cookies, children }) {
  const coloModeManager =
    typeof cookies == "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={coloModeManager}>
      {children}
    </ChakraProvider>
  );
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
