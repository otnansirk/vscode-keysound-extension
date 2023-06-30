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
        soundPath: this.config.get('keysound.enter') === true
                    ? path.join(Keysound.rootPath, '/audio/keysound_click2.wav')
                    : this.config.get('keysound.enter', '')
      },
      // Register other keysound by ascii
    ];
  }

  public getKeysoundDefault(): KeysoundType {
    return {
      key: 'other',
      name: 'other',
      soundPath: this.config.get('keysound.other') === true
                  ? path.join(Keysound.rootPath, '/audio/keysound_click1.wav')
                  : this.config.get('keysound.other', '')
    };
  }

  public getKeysoundBackspace(): KeysoundType {
    return {
      key: NaN,
      name: 'backspace',
      soundPath: this.config.get('keysound.backspace') === true
                  ? path.join(Keysound.rootPath, '/audio/keysound_click2.wav')
                  : this.config.get('keysound.backspace', '')
    };
  };

}

export default Keysound;
