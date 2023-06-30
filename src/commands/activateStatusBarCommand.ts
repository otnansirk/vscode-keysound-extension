import * as vscode from 'vscode';
import Keysound from '../helpers/Keysound';

const activateStatusBarCommand = () => {
  const config   = new Keysound().getConfig();
  const isEnable = config.get('keysound.enabled', true);

  const statusBar   = vscode.window.createStatusBarItem('keydound', vscode.StatusBarAlignment.Right, 100);
  statusBar.text    =  `${isEnable ? '⌨':'ᶻ 𝗓 𐰁'}`;
  statusBar.command = 'keysound.enabled';
  statusBar.tooltip =  `${isEnable ? 'Click to disable keysound':'Click to enable keysound'}`;
  statusBar.show();
};

export default activateStatusBarCommand;
