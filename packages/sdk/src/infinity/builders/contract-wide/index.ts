import { constants } from "ethers";
import { Addresses, Order, Types } from "../..";
import { BaseBuilder } from "../base";

export type ContractWideOrderParams = Omit<
  Types.OrderInput,
  "complication" | "nfts" | "extraParams"
> & { collection: string };

export class ContractWideBuilder extends BaseBuilder<ContractWideOrderParams> {
  public isValid(order: Order): boolean {
    try {
      order.checkBaseValid();
      return order.kind === "contract-wide";
    } catch (err) {
      return false;
    }
  }

  public build(params: ContractWideOrderParams): Order {
    const { collection, ...rest } = params;

    const order = new Order(this.chainId, {
      ...rest,
      extraParams: constants.AddressZero,
      nfts: [{ collection, tokens: [] }],
      complication: Addresses.Complication[this.chainId],
    });

    return order;
  }
}
