if [ ! -d "protobuf" ]; then
  mkdir protobuf
  cd protobuf
  _download_url=$(curl -sL https://api.github.com/repos/protocolbuffers/protobuf/releases/latest \
    | grep "browser_download_url.*protoc-.*-linux-$(arch).zip" \
    | cut -d : -f 2,3 \
    | tr -d \" \
    | tr -d ' ')
  _file_name=$(echo $_download_url | awk -F "/" '{print $NF}')
  # 下载文件
  curl -sLO $_download_url
  unzip $_file_name
  rm $_file_name
else
  echo "protobuf already installed"
fi