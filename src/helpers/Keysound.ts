import * as vscode from 'vscode';
import path = require('path');

export type KeysoundType = {
  key       : string|number|boolean|null,
  name      : string,
  soundPath : string
};


class Keysound {

  private config: vscode.WorkspaceConfiguration;
  private static rootPath: string = path.join(__dirname, '../../');

  constructor() {
    this.config = vscode.workspace.getConfiguration();
  }

  /**
   * getConfig
   */
  public getConfig() {
    return this.config;
  }

  public getKeysounds():KeysoundType[] {
    
    return [
      {
        key: 10,
        name: 'enter',
        soundPath: this.config.get('keysound.enter')
                    ? this.config.get('keysound.enter', '')
                    : path.join(Keysound.rootPath, '/audio/keysound_click2.wav')
      },
      // Register other keysound by ascii
    ];
  }

  public getKeysoundDefault(): KeysoundType {
    return {
      key: 'other',
      name: 'other',
      soundPath: this.config.get('keysound.other')
                  ? this.config.get('keysound.other', '')
                  : path.join(Keysound.rootPath, '/audio/keysound_click1.wav')
    };
  }

  public getKeysoundBackspace(): KeysoundType {
    return {
      key: NaN,
      name: 'backspace',
      soundPath: this.config.get('keysound.backspace')
                  ? this.config.get('keysound.backspace', '')
                  : path.join(Keysound.rootPath, '/audio/keysound_click2.wav')
    };
  };

}

export default Keysound;
