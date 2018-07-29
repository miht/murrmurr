const { app, BrowserWindow, Menu } = require('electron')
const React = require('react')

//const { Howl } =  require('howler')
function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  win.loadFile('app/index.html')

  // open Developer Tools
  win.webContents.openDevTools();
  createMenu();

}

function testFunction() {
    alert('click');
}

function createMenu() {
  /*
   * TODO: emulate default macOS menu behaviors
   * https://electronjs.org/docs/api/menu#menusendactiontofirstresponderaction-macos
   */
  const menu = Menu.buildFromTemplate([
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
        },
        {
          label: 'Test sound',
          click() {
              testSound();
          }
        }
      ]
    }
  ]);

  Menu.setApplicationMenu(menu);
}


const testSound = () => win.webContents.executeJavaScript(`document.getElementById('A').play()`);

app.on('ready', createWindow)
