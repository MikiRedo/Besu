// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract SimpleStorage {
    uint256 public storeSomething;

    function set(uint256 x) public {
        storeSomething = x;
    }

    function get() public view returns(uint256) {
        return storeSomething;
    }
}