import { ChannelCredentials, ServiceError } from '@grpc/grpc-js';
import { WalletClient, CreateAddressRequest, TransactionRequest, BalanceRequest, WalletInfoRequest, CreateAddressResponse, TransactionResponse, BalanceResponse, WalletInfoResponse } from './atm.js';

const client = new WalletClient('localhost:50051', ChannelCredentials.createInsecure());

async function main() {
  // 示範 createAddress
  createAddress();

  // 示範 transaction
  const transactionRequest: TransactionRequest = { toAddress: '0x1234567890abcdef', points: 100, metadata: 'test transaction' };
  transaction(transactionRequest);

  // 示範 balance
  const balanceRequest: BalanceRequest = { address: '0x1234567890abcdef' };
  balance(balanceRequest);

  // 示範 walletInfo
  const walletInfoRequest: WalletInfoRequest = { address: '0x1234567890abcdef' };
  walletInfo(walletInfoRequest);
}

function createAddress() {
  client.createAddress({}, (error: ServiceError | null, response: CreateAddressResponse) => {
    if (error) {
      console.error('Error creating address:', error);
      return;
    }
    console.log('Created Address:', response.address);
  });
}

function transaction(request: TransactionRequest) {
  client.transaction(request, (error: ServiceError | null, response: TransactionResponse) => {
    if (error) {
      console.error('Error executing transaction:', error);
      return;
    }
    console.log('Transaction ID:', response.transactionId);
  });
}

function balance(request: BalanceRequest) {
  client.balance(request, (error: ServiceError | null, response: BalanceResponse) => {
    if (error) {
      console.error('Error querying balance:', error);
      return;
    }
    console.log('Balance Total:', response.total, 'Available:', response.available);
  });
}

function walletInfo(request: WalletInfoRequest) {
  client.walletInfo(request, (error: ServiceError | null, response: WalletInfoResponse) => {
    if (error) {
      console.error('Error getting wallet information:', error);
      return;
    }
    console.log('Wallet Info:', 'Total:', response.total, 'Available:', response.available);
    console.log('Transactions:', response.transactions);
  });
}

main().catch(console.error);
