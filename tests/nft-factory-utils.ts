import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { Bought, Offered } from "../generated/NFTFactory/NFTFactory"

export function createBoughtEvent(
  itemId: BigInt,
  nft: Address,
  tokenId: BigInt,
  price: BigInt,
  seller: Address,
  buyer: Address
): Bought {
  let boughtEvent = changetype<Bought>(newMockEvent())

  boughtEvent.parameters = new Array()

  boughtEvent.parameters.push(
    new ethereum.EventParam("itemId", ethereum.Value.fromUnsignedBigInt(itemId))
  )
  boughtEvent.parameters.push(
    new ethereum.EventParam("nft", ethereum.Value.fromAddress(nft))
  )
  boughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  boughtEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  boughtEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  boughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return boughtEvent
}

export function createOfferedEvent(
  itemId: BigInt,
  nft: Address,
  tokenId: BigInt,
  price: BigInt,
  seller: Address
): Offered {
  let offeredEvent = changetype<Offered>(newMockEvent())

  offeredEvent.parameters = new Array()

  offeredEvent.parameters.push(
    new ethereum.EventParam("itemId", ethereum.Value.fromUnsignedBigInt(itemId))
  )
  offeredEvent.parameters.push(
    new ethereum.EventParam("nft", ethereum.Value.fromAddress(nft))
  )
  offeredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offeredEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  offeredEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )

  return offeredEvent
}
