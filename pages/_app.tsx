import { ChakraProvider } from "@chakra-ui/react"
import { Web3ReactProvider } from "@web3-react/core"
import { Web3Provider } from "@ethersproject/providers"
import type { AppProps } from 'next/app'
import { ethers } from "ethers";

function getLibrary(provider: any, connector: any) {
  return new Web3Provider(provider);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </ChakraProvider>
  )
}

export default MyApp
