import isWAV from "../helpers/isWAV";
import * as vscode from 'vscode';


/**
 *
 * @param filepath string
 * @return void
 */
const playSoundHandler = (filepath: string): void => {

  try {
    if (!filepath) {
      return;
    }

    if (!isWAV(filepath)) {
      throw new Error("Only wav files are supported.");
    }

    const player = require('play-sound')();
    player.play(filepath, function (err: any) {
      if (err) {
        throw new Error("Failed to play sound effect");
      }
    });

  } catch (error: any) {
    vscode.window.showErrorMessage(error.message);
  }
};

export default playSoundHandler;
