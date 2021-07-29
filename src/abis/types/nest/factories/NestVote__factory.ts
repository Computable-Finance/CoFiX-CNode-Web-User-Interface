/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { NestVote, NestVoteInterface } from "../NestVote";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "executor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "NIPExecute",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "NIPSubmitted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NIPVote",
    type: "event",
  },
  {
    inputs: [],
    name: "_governance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_proposalList",
    outputs: [
      {
        internalType: "string",
        name: "brief",
        type: "string",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "startTime",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "stopTime",
        type: "uint48",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "staked",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "gainValue",
        type: "uint96",
      },
      {
        internalType: "uint32",
        name: "state",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "executor",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_stakedLedger",
    outputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nestGovernanceAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nestGovernanceAddress",
        type: "address",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "acceptance",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "voteDuration",
            type: "uint64",
          },
          {
            internalType: "uint96",
            name: "proposalStaking",
            type: "uint96",
          },
        ],
        internalType: "struct INestVote.Config",
        name: "config",
        type: "tuple",
      },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getConfig",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "acceptance",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "voteDuration",
            type: "uint64",
          },
          {
            internalType: "uint96",
            name: "proposalStaking",
            type: "uint96",
          },
        ],
        internalType: "struct INestVote.Config",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "brief",
        type: "string",
      },
    ],
    name: "propose",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getProposeInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "brief",
            type: "string",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "uint48",
            name: "startTime",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "stopTime",
            type: "uint48",
          },
          {
            internalType: "address",
            name: "proposer",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "staked",
            type: "uint96",
          },
          {
            internalType: "uint96",
            name: "gainValue",
            type: "uint96",
          },
          {
            internalType: "uint32",
            name: "state",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "executor",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "nestCirculation",
            type: "uint96",
          },
        ],
        internalType: "struct INestVote.ProposalView",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProposeCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "order",
        type: "uint256",
      },
    ],
    name: "list",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "brief",
            type: "string",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "uint48",
            name: "startTime",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "stopTime",
            type: "uint48",
          },
          {
            internalType: "address",
            name: "proposer",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "staked",
            type: "uint96",
          },
          {
            internalType: "uint96",
            name: "gainValue",
            type: "uint96",
          },
          {
            internalType: "uint32",
            name: "state",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "executor",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "nestCirculation",
            type: "uint96",
          },
        ],
        internalType: "struct INestVote.ProposalView[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNestCirculation",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "proxyAdmin",
        type: "address",
      },
      {
        internalType: "address",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "upgradeProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "proxyAdmin",
        type: "address",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferUpgradeAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class NestVote__factory {
  static readonly abi = _abi;
  static createInterface(): NestVoteInterface {
    return new utils.Interface(_abi) as NestVoteInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NestVote {
    return new Contract(address, _abi, signerOrProvider) as NestVote;
  }
}
