/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type { ICoFiXV2DAO, ICoFiXV2DAOInterface } from '../ICoFiXV2DAO'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'gov',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'CoFiBurn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'gov',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'flag',
        type: 'uint256',
      },
    ],
    name: 'FlagSet',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'gov',
        type: 'address',
      },
    ],
    name: 'setGovernance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'start',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'addETHReward',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]

export class ICoFiXV2DAO__factory {
  static readonly abi = _abi
  static createInterface(): ICoFiXV2DAOInterface {
    return new utils.Interface(_abi) as ICoFiXV2DAOInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ICoFiXV2DAO {
    return new Contract(address, _abi, signerOrProvider) as ICoFiXV2DAO
  }
}
