# INSTALL Instructions

Welcome to the installation guide for the "gRPC TypeScript Example" project. To get you up and running with this project, we offer two distinct installation methods. You can opt for the convenience of using a DevContainer with Visual Studio Code (VS Code) or follow the traditional manual setup approach. Choose the method that best suits your preference or development environment.

## Method 1: Using DevContainer

This method leverages the power of Docker and VS Code to set up a development environment that's consistent and isolated. It requires minimal configuration on your part and ensures that the project runs smoothly, regardless of the host operating system.

### Prerequisites:

- **Docker**: Ensure Docker is installed and running on your machine. [Download Docker](https://www.docker.com/products/docker-desktop)
- **Visual Studio Code (VS Code)**: If not already installed, [download VS Code](https://code.visualstudio.com/download) from the official site.
  
### Steps:

1. **Install the Remote - Containers Extension**: Open VS Code, go to the Extensions view by clicking on the square icon on the sidebar or pressing `Ctrl+Shift+X`. Search for "Dev Containers" and install it.

2. **Open the Project in a Container**: With the extension installed, open the project folder in VS Code. You should see a prompt in the lower right corner asking if you want to re-open the project in a container. Click "Reopen in Container". If you miss the prompt, you can also open the command palette (`Ctrl+Shift+P`), type "Dev Containers: Open Folder in Container...", and select the project folder.

3. **Wait for the Container to Build**: The first time you open the project in a container, Docker will build the development environment based on the configuration specified in the project's `.devcontainer` folder. This process can take several minutes.

4. **You're all Set!**: Once the container is built and running, you're ready to start developing within a consistent development environment that's pre-configured with all the necessary tools and settings.

## Method 2: Manual Setup

For those who prefer a more traditional approach or have specific customization needs, manual setup is the way to go.

### Prerequisites:

- **Node.js**: Make sure Node.js is installed on your system. [Download Node.js](https://nodejs.org/)

### Steps:

1. **Install Protocol Buffer Compiler (protoc)**: To generate TypeScript stubs from `.proto` files, you need the Protocol Buffer Compiler. Run the provided script to install `protoc`:

   ```sh
   ./scripts/install_protoc.sh
   ```

2. **Install Project Dependencies**: Navigate to the project folder and run the following command to install the project's dependencies:

   ```sh
   npm install
   ```

3. **(Optional) Install VS Code protobuf Plugin**: For an enhanced experience when editing `.proto` files, you can optionally install the `zxh404.vscode-proto3` VS Code plugin. This is not necessary for running the project but can make editing and understanding `.proto` files easier. 

    - Go to the Extensions view in VS Code (`Ctrl+Shift+X`).
    - Search for "vscode-proto3" and install it.

## Conclusion

You're now ready to start working with the "gRPC TypeScript Example" project using your chosen installation method. Refer back to the README document for further guidance on running the example and exploring the gRPC capabilities in TypeScript. Happy coding!