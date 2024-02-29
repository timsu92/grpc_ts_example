# gRPC TypeScript Example
Welcome to the "gRPC TypeScript Example" project! This repository is intended to demonstrate how to work with gRPC using TypeScript, with a simple yet illustrative example centered around ATM operations. It's an excellent starting point for developers looking to get hands-on experience with gRPC in TypeScript.

## Overview
gRPC is a high-performance, open-source and universal RPC framework that Google initially developed. It uses HTTP/2 for transport, Protocol Buffers as the interface description language, and it provides features such as authentication, load balancing, and more.

This project specifically showcases how to implement gRPC services and clients using TypeScript to perform various ATM operations like creating account, making transactions, checking balance, and checking info of the wallet.

## Getting Started
Before diving into the code, please make sure to check out the `INSTALL` document in this repository for detailed instructions on setting up your environment and installing the necessary dependencies to run this example.

### Setup Instructions
1. Clone the repository to your local machine.
2. Follow the installation instructions in the `INSTALL` file to set up your project.
3. Once all dependencies have been installed successfully, you'll need to compile the `.proto` files to TypeScript. This can be done easily using the command:

   ```sh
   npm run compile_proto
   ```

   This command translates the protobuf definitions into TypeScript classes and interfaces that can be used in your server and client code.

4. After you've compiled the .proto files, it's time to start the server. Run:

   ```sh
   npm run serve
   ```

   Keep an eye on the console output. Once you see the message `server is up at port 50051!`, it means the server is running and listening for incoming gRPC calls.

5. With the server up and running, you can now run the client to perform ATM operations. Open a new terminal window or tab, and execute:

   ```sh
   npm run client
   ```

   This command initiates a client that connects to your gRPC server and performs predefined operations. Watch the console to see the interactions between the client and the server as they occur.

## What to Expect
The example operations provided in this project will demonstrate basic ATM functionalities through gRPC calls. You'll see how the client sends requests to the server, and how the server responds to these requests using the power of gRPC and Protocol Buffers.

## Conclusion
Congratulations on setting up and running the gRPC TypeScript example! Through this simple ATM example, you've taken a significant step into the world of gRPC with TypeScript. Feel free to explore the codebase further and experiment with different operations or even extend the project with more complex functionalities.

Happy coding!