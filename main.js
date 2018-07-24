const { app, BrowserWindow, Menu } = require('electron')

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  win.loadFile('index.html')

  // open Developer Tools
  win.webContents.openDevTools();

  createMenu();
}

function createMenu() {
  var menu = Menu.buildFromTemplate([
    {
      label: 'Menu',
      submenu: [
        {
          label: 'About MurrMurr'
        },
        {
          type: 'separator'
        },
        {
          label: 'Preferences'
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit MurrMurr',
          accelerator: 'CmdOrCtrl+Q',
          click() { app.quit() },
        }
      ]
    }
  ]);

  Menu.setApplicationMenu(menu);
}

app.on('ready', createWindow)
