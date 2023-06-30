import * as vscode from 'vscode';
import playSoundHandler from '../handlers/playSoundHandler';
import keysoundHandler from '../handlers/keysoundHandler';


const autoPlaySoundCommand = (): void => {

  vscode.workspace.onDidChangeTextDocument((event: vscode.TextDocumentChangeEvent) => {
    const config = vscode.workspace.getConfiguration();

    if (config.get('keysound.enabled', false)) {
      const contentChanges = event.contentChanges;

      if (contentChanges.length > 0) {
        const text  = contentChanges[0].text;
        const ascii = text.charCodeAt(text.length - 1);
        const sound = keysoundHandler(ascii);
        playSoundHandler(sound.soundPath);
      }

    }
  });

};

export default autoPlaySoundCommand;