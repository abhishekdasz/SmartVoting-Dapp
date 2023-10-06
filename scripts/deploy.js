const { ethers } = require("hardhat");

async function main() {
  // Get the account that will deploy the contract (account[0] is the default account)
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with account:", deployer.address);

  // Replace with your constructor arguments, e.g., candidate names and duration
  const candidateNames = ["Candidate 1", "Candidate 2"];
  const durationMinutes = 60; // 1 hour

  // Deploy the contract
  const Voting = await ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(candidateNames, durationMinutes);

  console.log("Voting contract deployed to:", voting.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
