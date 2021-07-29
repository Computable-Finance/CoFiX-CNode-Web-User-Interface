/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoFiXDAO, CoFiXDAOInterface } from "../CoFiXDAO";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "flag",
        type: "uint256",
      },
    ],
    name: "ApplicationChanged",
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
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "addETHReward",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "checkApplication",
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
    inputs: [],
    name: "getConfig",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "cofiPerBlock",
            type: "uint16",
          },
          {
            internalType: "uint32",
            name: "cofiLimit",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "priceDeviationLimit",
            type: "uint16",
          },
        ],
        internalType: "struct ICoFiXDAO.Config",
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
        name: "token",
        type: "address",
      },
    ],
    name: "getTokenExchange",
    outputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "exchange",
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
        name: "governance",
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
    inputs: [],
    name: "quotaOf",
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
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "payback",
        type: "address",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "payback",
        type: "address",
      },
    ],
    name: "redeemToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "flag",
        type: "uint256",
      },
    ],
    name: "setApplication",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "cofiPerBlock",
            type: "uint16",
          },
          {
            internalType: "uint32",
            name: "cofiLimit",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "priceDeviationLimit",
            type: "uint16",
          },
        ],
        internalType: "struct ICoFiXDAO.Config",
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
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "exchange",
        type: "uint256",
      },
    ],
    name: "setTokenExchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "settle",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "totalETHRewards",
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
        name: "newGovernance",
        type: "address",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611fcd806100206000396000f3fe6080604052600436106100f35760003560e01c8063776dfe991161008a578063c3f909d411610059578063c3f909d414610340578063c4d66de814610407578063d85c407914610427578063daa78c0f1461044757600080fd5b8063776dfe991461023d5780637bde82f21461025d578063abc2ebee14610270578063ad68ebf71461032057600080fd5b80633f83e9c8116100c65780633f83e9c8146101a4578063543ed042146101c757806360291d6f146101da5780636314ed681461021d57600080fd5b80631a7bf701146100f85780631c1b87721461011a5780631c2f3e3d1461013a57806333d1182c14610191575b600080fd5b34801561010457600080fd5b50610118610113366004611c9f565b610458565b005b34801561012657600080fd5b50610118610135366004611ab5565b61057d565b34801561014657600080fd5b506002546101679073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61011861019f366004611c3b565b61064c565b3480156101b057600080fd5b506101b9610a4f565b604051908152602001610188565b6101186101d5366004611b7d565b610ac2565b3480156101e657600080fd5b506101b96101f5366004611ab5565b73ffffffffffffffffffffffffffffffffffffffff1660009081526006602052604090205490565b34801561022957600080fd5b50610118610238366004611bce565b610bb0565b34801561024957600080fd5b506101b9610258366004611ab5565b504790565b61011861026b366004611cb7565b610cbd565b34801561027c57600080fd5b506102f461028b366004611ab5565b73ffffffffffffffffffffffffffffffffffffffff908116600090815260076020908152604091829020825180840190935254928316808352740100000000000000000000000000000000000000009093046bffffffffffffffffffffffff1691018190529091565b6040805173ffffffffffffffffffffffffffffffffffffffff9093168352602083019190915201610188565b34801561032c57600080fd5b5061011861033b366004611c0f565b610f3e565b34801561034c57600080fd5b506103c1604080516080810182526000808252602082018190529181018290526060810191909152506040805160808101825260035460ff8116825261ffff61010082048116602084015263ffffffff6301000000830416938301939093526701000000000000009004909116606082015290565b6040516101889190815160ff16815260208083015161ffff9081169183019190915260408084015163ffffffff1690830152606092830151169181019190915260800190565b34801561041357600080fd5b50610118610422366004611ab5565b61119e565b34801561043357600080fd5b50610118610442366004611c0f565b611265565b610118610455366004611ab5565b50565b6002546040517f91e1472b0000000000000000000000000000000000000000000000000000000081523360048201526000602482015273ffffffffffffffffffffffffffffffffffffffff909116906391e1472b9060440160206040518083038186803b1580156104c857600080fd5b505afa1580156104dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105009190611c7d565b61056b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f436f4669583a21676f760000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b8060036105788282611e5c565b505050565b610586816113d8565b8073ffffffffffffffffffffffffffffffffffffffff16630a6548536040518163ffffffff1660e01b815260040160206040518083038186803b1580156105cc57600080fd5b505afa1580156105e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106049190611ad9565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905550565b6040805160808101825260035460ff811680835261ffff61010083048116602085015263ffffffff630100000084041694840194909452670100000000000000909104909216606082015290600114610727576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f436f46695844414f3a205265707572636861736520737461747573206572726f60448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610562565b73ffffffffffffffffffffffffffffffffffffffff8481166000908152600760209081526040918290208251808401909352549283168252740100000000000000000000000000000000000000009092046bffffffffffffffffffffffff16918101829052906107f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f436f46695844414f3a20546f6b656e206e6f7420616c6c6f77656400000000006044820152606401610562565b60045481513491670de0b6b3a764000091829173ffffffffffffffffffffffffffffffffffffffff90811691161561084657610839818660000151600187901c8a61162b565b60019590951c9490935091505b60208501516bffffffffffffffffffffffff1661086b84670de0b6b3a7640000611dbf565b6108759190611d84565b60208601519093506bffffffffffffffffffffffff1661089d83670de0b6b3a7640000611dbf565b6108a79190611d84565b600080549193509081906108d490849073ffffffffffffffffffffffffffffffffffffffff16888c61162b565b91509150876060015161ffff166127106108ee9190611d6c565b6108f88683611dbf565b6109029190611dbf565b61090c8584611dbf565b61091890612710611dbf565b11158015610963575060608801516109369061ffff16612710611dfc565b6109408683611dbf565b61094a9190611dbf565b6109548584611dbf565b61096090612710611dbf565b10155b6109c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f436f46695844414f3a21707269636500000000000000000000000000000000006044820152606401610562565b6000806109d88a60055461173a565b90925090506109e78c83611dfc565b6109f19082611dfc565b600555506000905082610a04878d611dbf565b610a0e9190611d84565b600054909150610a369073ffffffffffffffffffffffffffffffffffffffff1633308e6117a7565b610a418c3383611945565b505050505050505050505050565b6040805160808101825260035460ff811680835261ffff61010083048116602085015263ffffffff6301000000840416948401949094526701000000000000009091049092166060820152600091600114610aac57600091505090565b6000610aba8260055461173a565b509392505050565b33600090815260066020526040902054600114610b3b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f436f46695844414f3a21617070000000000000000000000000000000000000006044820152606401610562565b73ffffffffffffffffffffffffffffffffffffffff8316610b9f5760405173ffffffffffffffffffffffffffffffffffffffff83169082156108fc029083906000818181858888f19350505050158015610b99573d6000803e3d6000fd5b50610baa565b610baa838383611945565b50505050565b6bffffffffffffffffffffffff811115610c4c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f436f46695844414f3a2065786368616e67652076616c7565206f766572666c6f60448201527f77000000000000000000000000000000000000000000000000000000000000006064820152608401610562565b60408051808201825273ffffffffffffffffffffffffffffffffffffffff93841681526bffffffffffffffffffffffff928316602080830191825295851660009081526007909652919094209351905190911674010000000000000000000000000000000000000000029116179055565b6040805160808101825260035460ff811680835261ffff61010083048116602085015263ffffffff630100000084041694840194909452670100000000000000909104909216606082015290600114610d98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f436f46695844414f3a205265707572636861736520737461747573206572726f60448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610562565b6004546000805490918291610dc89173ffffffffffffffffffffffffffffffffffffffff9081169116348761162b565b91509150826060015161ffff16612710610de29190611d6c565b610dec9082611dbf565b610df883612710611dbf565b11158015610e2f57506060830151610e169061ffff16612710611dfc565b610e209082611dbf565b610e2c83612710611dbf565b10155b610e95576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f436f46695844414f3a21707269636500000000000000000000000000000000006044820152606401610562565b600082610eaa87670de0b6b3a7640000611dbf565b610eb49190611d84565b9050600080610ec58660055461173a565b9092509050610ed48883611dfc565b610ede9082611dfc565b600555600054610f069073ffffffffffffffffffffffffffffffffffffffff1633308b6117a7565b604051339084156108fc029085906000818181858888f19350505050158015610f33573d6000803e3d6000fd5b505050505050505050565b6002546040517f91e1472b0000000000000000000000000000000000000000000000000000000081523360048201526000602482015273ffffffffffffffffffffffffffffffffffffffff909116906391e1472b9060440160206040518083038186803b158015610fae57600080fd5b505afa158015610fc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe69190611c7d565b61104c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f436f4669583a21676f76000000000000000000000000000000000000000000006044820152606401610562565b600254604080517f96776492000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916396776492916004808301926020929190829003018186803b1580156110b757600080fd5b505afa1580156110cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ef9190611ad9565b905073ffffffffffffffffffffffffffffffffffffffff8316611193576040517fdaa78c0f0000000000000000000000000000000000000000000000000000000081526000600482015273ffffffffffffffffffffffffffffffffffffffff82169063daa78c0f9084906024016000604051808303818588803b15801561117557600080fd5b505af1158015611189573d6000803e3d6000fd5b5050505050505050565b610578838284611945565b60025473ffffffffffffffffffffffffffffffffffffffff161561121e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f436f4669583a21696e697469616c697a650000000000000000000000000000006044820152606401610562565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6002546040517f91e1472b0000000000000000000000000000000000000000000000000000000081523360048201526000602482015273ffffffffffffffffffffffffffffffffffffffff909116906391e1472b9060440160206040518083038186803b1580156112d557600080fd5b505afa1580156112e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130d9190611c7d565b611373576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f436f4669583a21676f76000000000000000000000000000000000000000000006044820152606401610562565b73ffffffffffffffffffffffffffffffffffffffff8216600081815260066020908152604091829020849055815192835282018390527f756de02efc109a2c47289727af65d5a4c9830601b57f730abb8d93d6a1aa0547910160405180910390a15050565b60025473ffffffffffffffffffffffffffffffffffffffff163381148061149e57506040517f91e1472b0000000000000000000000000000000000000000000000000000000081523360048201526000602482015273ffffffffffffffffffffffffffffffffffffffff8216906391e1472b9060440160206040518083038186803b15801561146657600080fd5b505afa15801561147a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149e9190611c7d565b611504576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f436f4669583a21676f76000000000000000000000000000000000000000000006044820152606401610562565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416908117909155604080517f746b56f9000000000000000000000000000000000000000000000000000000008152905163746b56f99160048082019260c092909190829003018186803b15801561159657600080fd5b505afa1580156115aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ce9190611af6565b50506001805473ffffffffffffffffffffffffffffffffffffffff9485167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155600080549590941694169390931790915550505050565b6040517f3c72db4c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301528281166024830152600091829182918291829182918b1690633c72db4c908a9060440160c0604051808303818588803b1580156116aa57600080fd5b505af11580156116be573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906116e39190611ce7565b509450945094509450508383670de0b6b3a76400006117029190611dbf565b61170c9190611d84565b95508161172182670de0b6b3a7640000611dbf565b61172b9190611d84565b94505050505094509492505050565b6000806000846040015163ffffffff16670de0b6b3a764000061175d9190611dbf565b9050846020015161ffff16436117739190611dbf565b61178590670de0b6b3a7640000611dbf565b91506117918483611dfc565b92508083111561179f578092505b509250929050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905291516000928392908816916118469190611d31565b6000604051808303816000865af19150503d8060008114611883576040519150601f19603f3d011682016040523d82523d6000602084013e611888565b606091505b50915091508180156118b25750805115806118b25750808060200190518101906118b29190611c7d565b61193d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f5472616e7366657248656c7065723a205452414e534645525f46524f4d5f464160448201527f494c4544000000000000000000000000000000000000000000000000000000006064820152608401610562565b505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905291516000928392908716916119dc9190611d31565b6000604051808303816000865af19150503d8060008114611a19576040519150601f19603f3d011682016040523d82523d6000602084013e611a1e565b606091505b5091509150818015611a48575080511580611a48575080806020019051810190611a489190611c7d565b611aae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5472616e7366657248656c7065723a205452414e534645525f4641494c4544006044820152606401610562565b5050505050565b600060208284031215611ac757600080fd5b8135611ad281611f75565b9392505050565b600060208284031215611aeb57600080fd5b8151611ad281611f75565b60008060008060008060c08789031215611b0f57600080fd5b8651611b1a81611f75565b6020880151909650611b2b81611f75565b6040880151909550611b3c81611f75565b6060880151909450611b4d81611f75565b6080880151909350611b5e81611f75565b60a0880151909250611b6f81611f75565b809150509295509295509295565b60008060008060808587031215611b9357600080fd5b8435611b9e81611f75565b93506020850135611bae81611f75565b92506040850135611bbe81611f75565b9396929550929360600135925050565b600080600060608486031215611be357600080fd5b8335611bee81611f75565b92506020840135611bfe81611f75565b929592945050506040919091013590565b60008060408385031215611c2257600080fd5b8235611c2d81611f75565b946020939093013593505050565b600080600060608486031215611c5057600080fd5b8335611c5b81611f75565b9250602084013591506040840135611c7281611f75565b809150509250925092565b600060208284031215611c8f57600080fd5b81518015158114611ad257600080fd5b600060808284031215611cb157600080fd5b50919050565b60008060408385031215611cca57600080fd5b823591506020830135611cdc81611f75565b809150509250929050565b60008060008060008060c08789031215611d0057600080fd5b865195506020870151945060408701519350606087015192506080870151915060a087015190509295509295509295565b6000825160005b81811015611d525760208186018101518583015201611d38565b81811115611d61576000828501525b509190910192915050565b60008219821115611d7f57611d7f611e13565b500190565b600082611dba577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611df757611df7611e13565b500290565b600082821015611e0e57611e0e611e13565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000813561ffff81168114611e5657600080fd5b92915050565b813560ff8116808214611e6e57600080fd5b82549150807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00831617835562ffff00611ea960208601611e42565b60081b1680827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000851617178455604085013563ffffffff81168114611eed57600080fd5b66ffffffff0000008160181b16837fffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000861617831717855550505050611f71611f3760608401611e42565b82547fffffffffffffffffffffffffffffffffffffffffffffff0000ffffffffffffff1660389190911b68ffff0000000000000016178255565b5050565b73ffffffffffffffffffffffffffffffffffffffff8116811461045557600080fdfea26469706673582212200966505a9a1fe8495af2fc2aafe4b6b0b9a399d6bf69a0a6c132d39b7f35f59164736f6c63430008060033";

export class CoFiXDAO__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoFiXDAO> {
    return super.deploy(overrides || {}) as Promise<CoFiXDAO>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CoFiXDAO {
    return super.attach(address) as CoFiXDAO;
  }
  connect(signer: Signer): CoFiXDAO__factory {
    return super.connect(signer) as CoFiXDAO__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoFiXDAOInterface {
    return new utils.Interface(_abi) as CoFiXDAOInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoFiXDAO {
    return new Contract(address, _abi, signerOrProvider) as CoFiXDAO;
  }
}