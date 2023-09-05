# 리액트 네이티브 연습

첫 리액트 네이티브 프로젝트

## 실행환경 구성
### 공통
- 프로젝트 첫 설치 시 실행하라는 명령어 그대로 실행

### android
1. android studio 로 `./android` 폴더 열기
2. `Cannot run program "node"` 오류 시
   1. 터미널에서 `code ~/.zshrc` 입력하여 vscode로 설정파일 열기
   2. ```
        export ANDROID_HOME=$HOME/Library/Android/sdk
        export PATH=$PATH:$ANDROID_HOME/emulator
        export PATH=$PATH:$ANDROID_HOME/tools
        export PATH=$PATH:$ANDROID_HOME/tools/bin
        export PATH=$PATH:$ANDROID_HOME/platform-tools
      ```
    3. 빌드 다시 한 후 같은 오류 뜰 시
    4. `sudo chmod +x /Applications/Android\ Studio.app/Contents/bin/printenv` 입력 후 다시 빌드
3. `yarn android` 명령 실행 시 작동

### ios
1. `./ios` 폴더에서 터미널 열기
2. `pod install` 명령 실행
3. `OpenSSL-Universal` 설치 오류 시
   1. ```
        sudo gem uninstall cocoapods-downloader
        sudo gem install cocoapods-downloader -v 최소버전
      ```
    2. 다시 `pod install` 후 `OpenSSL-Universal` 설치 성공 시
    3. ```
        sudo gem uninstall cocoapods-downloader
        sudo gem install cocoapods-downloader
       ```
    4. 다시 `pod install`
4. `xcrun: error: SDK "iphoneos" cannot be located.` 오류 시
   1. `sudo xcode-select --switch /Applications/Xcode.app` 실행 후 `pod install`
5. `pod install` 성공 후 `yarn ios` 명령 실행 시 작동

## 연습 내용
- axios를 사용한 랜덤 단어 api 요청하여 화면에 출력 후 TextInput을 이용하여 같은 단어 입력 하는 게임