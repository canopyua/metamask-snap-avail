# Avail wallet snap.

![](https://github.com/chainsafe/metamask-snap-polkadot/workflows/ci/badge.svg)
![](https://img.shields.io/github/issues-raw/chainsafe/metamask-snap-polkadot)
![](https://img.shields.io/github/license/chainsafe/metamask-snap-polkadot)

This project uses the [MetaMask Snaps](https://metamask.io/snaps/) framework to extend MetaMask
capabilities to include support for Avail.
[Substrate](https://docs.substrate.io/)- and FRAME-based blockchains in the
[Polkadot](https://www.polkadot.network/) ecosystem.

## Documentation

This snap is a built on top of polkadot snap by chainsafe, its architecture, integration steps and detailed API documentation for dApp
developers is covered in the
[project wiki](https://github.com/ChainSafe/metamask-snap-polkadot/wiki), which also includes a
usage guide for the example dApp

## Local Development

Developers who wish to use the snap locally must use [MetaMask Flask](https://metamask.io/flask/);
run the following commands from the project root to launch the
[Polkadot Wallet Snap Example dApp](https://github.com/ChainSafe/metamask-snap-polkadot/tree/master/packages/example).
Please make sure to be using yarn for everything.

- `yarn install`
- `cd packages/snap`
- `rm -rf build && rm -rf dist && cd ../.. && yarn build:snap && cd packages/snap && mm-snap manifest --fix`
- `yarn start` <br/>

In another terminal

- `cd packages/example`
- `yarn start`

## License

Copyright [2020] [ChainSafe Systems]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
