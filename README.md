# Last-Minute App

## 📋 Overview
Last-Minute is a React Native app built with **Expo** and **EAS (Expo Application Services)**. This document provides a comprehensive guide on how to set up, install dependencies, run the app on iOS and Android, execute tests, and build the application for distribution.

## 🚀 Getting Started
### Prerequisites
Ensure you have the following installed on your machine before proceeding:

- **Node.js** (Latest LTS recommended)
- **npm** (bundled with Node.js) or **Yarn**
- **Git** (for version control)
- **Expo CLI** (`npm install -g expo-cli`)
- **EAS CLI** (`npm install -g eas-cli`)
- **Xcode** (for iOS development, Mac users only)
- **CocoaPods** (`sudo gem install cocoapods` for iOS dependencies)
- **Android Studio** (for Android development)

### Cloning the Repository
```sh
 git clone https://github.com/jlovera3/last-minute.git
 cd last-minute
```

### Installing Dependencies
```sh
 npm install
```

### Setting Up Environment Variables
Create a `.env` file in the root directory and add necessary environment variables. Ensure they are properly configured for development and production environments.

## 📱 Running the App

### Start the Expo Development Server
```sh
 npm start
```
This will launch the Expo developer server, providing a QR code for running the app on a physical device using the Expo Go app.

### Running on Android
```sh
 npm run android
```
Make sure you have an emulator running or a physical device connected.

### Running on iOS
```sh
 npm run ios
```
Only works on **macOS** with Xcode installed.

## 🔧 Additional Commands
### Prebuild the project
```sh
 npm run prebuild
```
This generates the native iOS and Android folders.

### Open in iOS Simulator with Xcode
```sh
 npm run open:ios
```

### Open in Android Studio
```sh
 npm run open:android
```

### Run in Web Mode
```sh
 npm run web
```

## 🏗️ Building the App
### Android (APK)
```sh
 npm run eas:build:apk
```

### Android (AAB for Play Store)
```sh
 npm run eas:build:aab
```

### iOS (Requires Apple Developer Account)
```sh
 npm run eas:build:ios
```
Since an Apple Developer account is required to build for iOS, this step has **not been completed**.

### Submit Android Build to Google Play Store
```sh
 npm run eas:submit:android
```

### Submit iOS Build to Apple Store (Not available)
```sh
 npm run eas:submit:ios
```

## 🧪 Testing
Run unit tests:
```sh
 npm run test
```

Run linting to check code formatting:
```sh
 npm run lint
```

Check for dependency issues:
```sh
 npm run doctor
```

## 📦 Build Management
### List All Builds
```sh
 npm run eas:build:list
```

### Cancel an In-Progress Build
```sh
 npm run eas:build:cancel
```

### Check Build Status
```sh
 npm run eas:build:status
```

## 📥 App Distribution
### Download Android Build from App Center
You can download the latest Android build from App Center using the following link:
[App Center Download Link](https://appcenter.ms/apps/YOUR_APP_ID/distribute/releases)

## 📸 Open this link on your Android devices (or scan the QR code) to install the app:
### 🔗 https://expo.dev/accounts/jlovera3/projects/last-minute/builds/cf6cc608-2a7b-4076-83a6-4e8832d5f80d
![QR Code](src/assets/images/qr-code.png)

## ❗ Notes
- The iOS build is **not available** since an Apple Developer Account is required.
- Ensure you are logged into the correct Expo and EAS accounts when building and deploying.

## 📜 License
This project is licensed under [MIT License](LICENSE).

