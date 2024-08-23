# Introduction

## Html5-QRCode
    Lightweight & cross platform QR Code and Bar code scanning library for the web, Use this lightweight library to easily / quickly integrate QR code, bar code, and other common code scanning capabilities to your web application.

## Supports two kinds of APIs
    Html5QrcodeScanner — End-to-end scanner with UI, integrate with less than ten lines of code.
    Html5Qrcode — Powerful set of APIs you can use to build your UI without worrying about camera setup, handling permissions, reading codes, etc.

## Prerequisites
    Before you begin, ensure you have the following:
        - A modern web browser
        - Basic knowledge of JavaScript and HTML

## Setup the library
    Install using npm:
        - npm install --save-dev html5-qrcode
    If you are not using any loader, you can get the latest UMD javascript code in production from 
        - https://unpkg.com/html5-qrcode.

## Setup a target HTML container
    In your web application, implement an HTML container element like <div> element. The library will render the QR scanning UI in this HTML container.
        - <div id="reader" width="600px"></div>

## Start scanner using Javascript
    Html5QrcodeScanner lets you implement an end to end scanner with few lines of code with the default user interface which allows scanning using the camera or selecting an image from the file system.

## You can set up the scanner as follows:
```javascript
const html5QrCode = new Html5Qrcode("reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    /* handle success */
};
const config = { fps: 10, qrbox: { width: 250, height: 250 } };

// If you want to prefer front camera
html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);

// If you want to prefer back camera
html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);

// Select front camera or fail with `OverconstrainedError`.
html5QrCode.start({ facingMode: { exact: "user"} }, config, qrCodeSuccessCallback);

// Select back camera or fail with `OverconstrainedError`.
html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);
```

## Stop Scanning
    To stop using camera and thus stop scanning, call Html5Qrcode#stop() which returns a Promise for stopping the video feed and scanning.

```javascript
html5QrCode.stop().then((ignore) => {
  // QR Code scanning is stopped.
}).catch((err) => {
  // Stop failed, handle it.
});
```

## Events
onQrsuccess - passes qrcode data on QR code scan success

## How to use the prefab
1. Download and import the prefab.
2. Publish the prefab to your project.
3. Drag and drop the prefab on the required page.
4. Preview the app.
5. Give camera permission when asked. 

## Links
For more information, refer to the [official documentation](https://scanapp.org/html5-qrcode-docs/docs/intro).







