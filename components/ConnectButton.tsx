import { useEffect, useState, useRef } from 'react'
import { Button } from '@chakra-ui/react'
import Web3Modal from 'web3modal'
import { providers } from 'ethers';

const ConnectButton = () => {
    const [connectWallet, setConnectWallet] = useState(false);
    const [buttonLabel, setButtonLabel] = useState('Connect Wallet');
    const [buttonColor, setButtonColor] = useState('green');
    const web3ModalRef: any = useRef();
    const getSignerOrProvider = async (needSigner = false) => {
        const provider = await web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);
        const { chainId } = await web3Provider.getNetwork();
        if (chainId !== 80001 ) {
            alert("Use Polygon Testnet!");
            throw new Error('Wrong network');
        }
        if (needSigner) {
            const signer = web3Provider.getSigner();
            return signer;
        }
        return provider;
    };
    const connectToWallet = async () => {
        try {
            await getSignerOrProvider(true);
            setConnectWallet(true);
            setButtonLabel('Disconnect Wallet');
            setButtonColor('red');
        } catch (e) {
            console.log('error', e);
        }
    }

    const disconnectFromWallet = async () => {
        try {
            await getSignerOrProvider(false);
            setConnectWallet(false);
            setButtonLabel('Connect Wallet');
            setButtonColor('green');
        } catch (e) {
            console.log('error', e);
        }
    }

    useEffect(() => {
        web3ModalRef.current = new Web3Modal({
            network: 'mumbai',
            providerOptions: {},
        });
    }, []);

    return (
        <>
            <Button 
                colorScheme={buttonColor}
                onClick={() => {
                    if (!connectWallet) connectToWallet();
                    else disconnectFromWallet();
                }}
            >
                {buttonLabel}
            </Button>
        </>
    )
}

export default ConnectButton;