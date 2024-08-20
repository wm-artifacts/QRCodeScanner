Prefab.isQRCodeScanned = false;
Prefab.isQRStatus = "START"; // START, STOP, VALID

Prefab.scannerButtonClick = function($event, widget) {
    if (Prefab.isQRStatus === "START") {
        Prefab.html5QrCode = new Html5Qrcode("reader");
        Prefab.startScanner();
        Prefab.markAsStopScanning();
        Prefab.isQRStatus = "STOP"
    } else if (Prefab.isQRStatus === "VALID") {
        Prefab.startScanner();
        Prefab.markAsStopScanning();
        Prefab.isQRStatus = "STOP";
        Prefab.isQRCodeAPICallDone = false;
    } else {
        Prefab.html5QrCode.stop();
        Prefab.markAsStartScanning();
        Prefab.isQRStatus = "START";
    }
};

Prefab.startScanner = function() {
    let config = {
        fps: 10,
        qrbox: {
            width: 400,
            height: 400
        }
    };
    Prefab.html5QrCode.start({
        facingMode: "environment"
    }, config, (qrDataId) => {
        if (!Prefab.isQRCodeScanned) {
            Prefab.onQrsuccess(qrDataId);
            Prefab.onValidQRScannerStop();
        }
    })
}

Prefab.onValidQRScannerStop = function() {
    Prefab.html5QrCode.stop();
    Prefab.isQRStatus = "VALID";
    Prefab.markAsValidQRCode();
}

Prefab.markAsStopScanning = function() {
    Prefab.Widgets.scannerButton.caption = "Stop Scan";
    Prefab.Widgets.scannerButton.class = 'btn-danger mw-160';
}

Prefab.markAsValidQRCode = function() {
    Prefab.Widgets.scannerButton.caption = "Valid, Restart Scan";
    Prefab.Widgets.scannerButton.class = 'btn-success mw-160';
}

Prefab.markAsStartScanning = function() {
    Prefab.Widgets.scannerButton.caption = "Start Scan";
    Prefab.Widgets.scannerButton.class = 'btn-default mw-160';
}
