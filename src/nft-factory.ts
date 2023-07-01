import {
  Bought as BoughtEvent,
  Offered as OfferedEvent
} from "../generated/NFTFactory/NFTFactory"
import { Bought, Offered } from "../generated/schema"

export function handleBought(event: BoughtEvent): void {
  let entity = new Bought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.itemId = event.params.itemId
  entity.nft = event.params.nft
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOffered(event: OfferedEvent): void {
  let entity = new Offered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.itemId = event.params.itemId
  entity.nft = event.params.nft
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.seller = event.params.seller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
