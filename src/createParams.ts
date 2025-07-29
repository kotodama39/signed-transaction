import { Wallet } from "ethers";
import fs from "fs/promises";

async function generateParams() {
  const wallet = Wallet.createRandom();

  const params = {
    privateKey: wallet.privateKey,
    to: wallet.address, // send myself for testing
    valueInEth: "0.001",
    gasLimit: 0,
    gasPriceGwei: "0",
    nonce: 0,
    chainId: 1   // mainnet
  };

  await fs.writeFile("params.json", JSON.stringify(params, null, 2));
  console.log("params.json file was generated.");
}

generateParams().catch(console.error);