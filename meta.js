const path = require('path')
const fs = require('fs')

const {
  printMessage,
  sortDependencies,
  gitInit,
  gitInitCommit,
  installDependencies,
  rmFile,
} = require('./utils')
const pkg = require('./package.json')

const templateVersion = pkg.version

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name',
    },
    cName: {
      type: 'string',
      required: true,
      message: 'Project chinese name',
      validate: function(text) {
        if (!text) {
          return false
        }
        return true
      }
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A ZCY React project',
    },
    author: {
      type: 'string',
      message: 'Author',
    },
    gitRemote: {
      type: 'string',
      message: 'git remote',
    },
    autoInstall: {
      type: 'confirm',
      message: 'Should we run `npm install` for you after the project has been created? (recommended)',
    },
  },
  complete: function(data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)
    rmFile(cwd, 'rm', green)
    .then(() => {
      return gitInit(cwd, 'git', green, data.gitRemote)
    })
    .then(() => {
      if (data.autoInstall) {
        return installDependencies(cwd, 'npm', green)
      } else {
        printMessage(data, chalk)
      }
    })
    .then(() => {
      printMessage(data, green)
    }).catch(e => {
      console.log(chalk.red('Error:'), e)
    })
  },
}
