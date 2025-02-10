import {Contract, Wallet, JsonRpcProvider, EventLog, Log} from 'ethers';
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

const getClientTxId = (events: EventLog[]):string => {
    const lastIndex = events.length-1;
    if (lastIndex >= 0){
        const typedEvent = events[lastIndex] as EventLog;
        // console.log('type event 0', typedEvent.args[0]);
        return typedEvent.args[0];
    }

    return 'none';
}

export const addToQueue = async(contract: Contract | null, model: string, totalSum: number): Promise<string> => {
    if (!contract) {
        console.log('Contract not initialized');
        return 'none';
    }

    try {

        // Execute the payable function with the value in the overrides
        const tx = await contract?.addToQueue(model, totalSum, {value: totalSum,});
        // console.log('txId', tx);

        // Wait for the transaction to be mined
        const receipt = await tx.wait();
        // console.log('Transaction receipt:', receipt);

        // Extract the event from the receipt
        const filter = contract.filters.Queued();  // Filter for all Queued events
        const events: (Log | EventLog)[] = (await contract.queryFilter(filter));

        // filter to get only EventLog Items
        const eventsLog = events.filter((log): log is EventLog => 'args' in log);

        // Return the transaction custom id to track data
        return getClientTxId(eventsLog);
    }
    catch(error){
        console.log('txid error', error);
        return 'none';
    }
}