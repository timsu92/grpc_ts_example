import * as grpc from "@grpc/grpc-js";
import {
  type BalanceResponse,
  type BalanceRequest,
  type WalletInfoRequest,
  type WalletInfoResponse,
  TransactionRequest,
  TransactionResponse,
  CreateAddressRequest,
  CreateAddressResponse,
} from "./atm.js";

export async function walletInfo(
  call: grpc.ServerUnaryCall<WalletInfoRequest, WalletInfoResponse>,
  callback: grpc.sendUnaryData<WalletInfoResponse>
) {
  try {
    const result = {
      total: 100,
      available: 80,
    };
    const transactions = [
      {
        toAddress: "0x1234567890",
        points: 10,
        metadata: "",
      },
      {
        toAddress: "0x0987654321",
        points: 20,
        metadata: "",
      },
    ];
    callback(null, {
      total: result.total,
      available: result.available,
      transactions: transactions,
    });
  } catch (err) {
    callback({
      code: grpc.status.UNKNOWN,
      details: "未知的錯誤",
      metadata: new grpc.Metadata(),
    });
  }
}

export function balance(
  call: grpc.ServerUnaryCall<BalanceRequest, BalanceResponse>,
  callback: grpc.sendUnaryData<BalanceResponse>
) {
  const total = 100;
  const available = 50;
  const response: BalanceResponse = {
    available: available,
    total: total,
  };
  callback(null, response);
}

export function transaction(
  call: grpc.ServerUnaryCall<TransactionRequest, TransactionResponse>,
  callback: grpc.sendUnaryData<TransactionResponse>
) {
  const transactionId = Date.now();
  const transactionResponse: TransactionResponse = {
    transactionId: BigInt(transactionId),
  };
  callback(null, transactionResponse);
}

export function createAddress(
  call: grpc.ServerUnaryCall<CreateAddressRequest, CreateAddressResponse>,
  callback: grpc.sendUnaryData<CreateAddressResponse>
) {
  const address = "0x1234567890abcdef";
  const response: CreateAddressResponse = { address };
  callback(null, response);
}
