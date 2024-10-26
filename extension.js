function activate(context) {
    console.log('Your Language extension is now active!');
}

function deactivate() {
    console.log('Your Language extension is now deactivated.');
}

module.exports = {
    activate,
    deactivate
};
