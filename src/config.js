const env = process.env.NODE_ENV;

// TODO fill parameters values
const woopTesnetConfig = {
  tokenVestingContractAddress: "0xdc0FABe68dF29E4EB3a09ADeae39d2C4C2A8B1a4",
  explorerRootURL: "https://testnet.wikiwoop.com/",
  tokenVestingContractAbi: require("./assets/abi/TokenVesting.json"),
  tokenVestingContractBytecode: require("./assets/bytecode/TokenVesting.json")
    .bytecode,
  erc20ContractAbi: require("./assets/abi/ERC20.json"),
};

// TODO fill parameters values
const mainnetConfig = {
  tokenVestingContractAddress: "0x955D8D3838d536770144E5574fBCE17ae9156C31",
  explorerRootURL: "https://explorer.wikiwoop.com/",
  tokenVestingContractAbi: require("./assets/abi/TokenVesting.json"),
  tokenVestingContractBytecode: require("./assets/bytecode/TokenVesting.json")
    .bytecode,
  erc20ContractAbi: require("./assets/abi/ERC20.json"),
};
const defaultConfig = mainnetConfig;

export let globalConfig;
switch (env) {
  case "development":
    globalConfig = woopTesnetConfig;
    break;
  case "production":
    globalConfig = mainnetConfig;
    break;
  case undefined:
    globalConfig = defaultConfig;
    break;
}
