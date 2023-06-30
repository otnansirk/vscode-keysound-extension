// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import autoPlaySoundCommand from './commands/autoPlaySoundCommand';
import activateStatusBarCommand from './commands/activateStatusBarCommand';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "keysound" is now active!');

  // Register autoactivated commands
  autoPlaySoundCommand();

  // register statusbar
  activateStatusBarCommand();
  vscode.workspace.onDidChangeConfiguration(() => {
    activateStatusBarCommand();
  });

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('keysound.enabled', () => {
    const config   = vscode.workspace.getConfiguration();
    const isActive = config.get('keysound.enabled', false);
    config.update('keysound.enabled', !isActive, vscode.ConfigurationTarget.Global);
  });



	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
