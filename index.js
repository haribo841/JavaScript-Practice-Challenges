// const greenworks = require('./greenworks/greenworks')
const { app, BrowserWindow } = require('electron')

// console.log(greenworks)

app.on('window-all-closed', function () {
    console.log('close game');
    //if (process.platform != 'darwin')
    app.quit();
});

// app.quit('', function () {
//     console.log('关闭游戏');
// });

app.on('ready', function () {
    loadWindow()
    // let relaunch = greenworks.restartAppIfNecessary(1806030);

    // if (relaunch) {
    //     console.log('relaunch');
    //     app.quit();
    // }
    // else {
    //     if (greenworks.init()) {
    //         console.log('Steam inited successfully');
    //         loadWindow();
    //     }
    //     else {
    //         app.quit();
    //     }
    // }

});

function loadWindow() {
    mainWindow = new BrowserWindow({
        width: 1354,
        height: 790,
        show: true,
        fullscreen: true,
        resizable: false,
        frame: true,
        title: "Minimal Dungeon RPG",
    });
    console.log("start game")
    mainWindow.removeMenu();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });

    // mainWindow.loadURL('file:///./cocosExport/web-desktop/index.html').then(() => {
    // });

    mainWindow.loadURL('file://' + __dirname + '/cocosExport/web-desktop/index.html').then(() => {
    });

}

// http://192.168.51.5:7456/build
// file:///C:/Users/RenChang/Desktop/electorn/cocosExport/web-desktop/index.html
// mainWindow.loadURL('file:///C:/Users/RenChang/Desktop/electorn/cocosExport/web-desktop/index.html').then(() => {
// });