import { Wallet, parseEther, parseUnits } from "ethers";
import fs from "fs/promises";
import process from "process";

async function main() {
  const inputPath = process.argv[2];
  const raw = await fs.readFile(inputPath, "utf-8");
  const params = JSON.parse(raw);

  const {
    privateKey,
    to,
    valueInEth,
    gasLimit,
    gasPriceGwei,
    nonce,
    chainId
  } = params;

  const wallet = new Wallet(privateKey);

  const tx = {
    to,
    value: parseEther(valueInEth),
    gasLimit,
    gasPrice: parseUnits(gasPriceGwei, "gwei"),
    nonce,
    chainId
  };

  const signedTx = await wallet.signTransaction(tx);

  console.log("Signed Transaction:");
  console.log(signedTx);
}

main().catch((err) => {
  console.error("Error:", err);
});