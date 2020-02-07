const {app, BrowserWindow} = require("electron");
const url = require("url");
const path = require("path");

//electron reload
if(process.env.NODE_ENV !== "production"){
    require("electron-reload")(__dirname, {
        electron: path.join(__dirname, "../node_modules", ".bin", "electron.cmd")
    });
}

let mainWin;

const createWindow = () => {
    mainWin = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 1200,
        height: 600,
        backgroundColor: "#ffffff",
        icon: `file://${__dirname}/public/images/logo.png`
    });

    mainWin.loadURL(url.format({
        pathname: path.join(__dirname, "views/index.html"),
        protocol: "file",
        slashes: true
    }));

    mainWin.on("closed", () =>{
        mainWin = null;
        app.quit();
    });

}

app.on("ready", async() => {
    await createWindow();
})

