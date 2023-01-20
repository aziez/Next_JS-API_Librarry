// import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import {store} from "../state/store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {


  return(
    <Provider store={store}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </Provider>

    
  )
}
