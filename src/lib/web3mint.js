import contract from '../contracts/MCXContract.json';
import { ethers } from 'ethers';
import { isMetaMaskInstalled, ethereum } from '../config';



export const mint = async (mint_amount) => {
    if(isMetaMaskInstalled()){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0xB6B4685790f07beFd7E003B0A1cf76f7deAB6aA5";
        const nftContract = new ethers.Contract(contractAddress, contract, signer);

        let txnHash = await nftContract.mint(ethereum.selectedAddress, mint_amount, {
            gasLimit: "285000",
            value: ethers.utils.parseEther((0.3 * mint_amount).toString())
        })
        return txnHash
    }
}