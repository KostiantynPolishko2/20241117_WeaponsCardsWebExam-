import {Contract, Wallet, JsonRpcProvider} from 'ethers';
import TimeLockABI from '../../abi/TimeLock.json';

export const getTimeLockSC = async(privateKey: string): Promise<Contract | null> => {
    const GANACHE_URL = process.env.REACT_APP_GANACHE_URL!;
    const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS_TIME_LOCK!;

    const provider = new JsonRpcProvider(GANACHE_URL);
    await provider.ready;

    try{
        const _wallet = new Wallet(privateKey, provider);
        const _contract = new Contract(CONTRACT_ADDRESS, TimeLockABI, _wallet);
        // console.log('contract', _contract);
        return _contract;
    }
    catch{
        return null;
    }
};

