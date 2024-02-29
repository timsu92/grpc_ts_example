import * as grpc from "@grpc/grpc-js"
import { balance, createAddress, transaction, walletInfo } from "./server_controllers.js";
import { WalletService } from "./atm.js";

const server = new grpc.Server();
server.addService(WalletService, { createAddress, transaction, balance, walletInfo });
server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.log(`Error when creating server on port ${port}:\n`, err);
  } else {
    console.log(`server is up at port ${port}!`)
  }
});

function shutdown() {
  server.tryShutdown(() => {
    console.log("Server shutting down.");
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);