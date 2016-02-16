'use strict'

require('babel-register')
const proc = require('child_process')
const socketEmitter = require('chokidar-socket-emitter')

const port = process.argv[2] || 9111

require('chokidar-socket-emitter')({ port: port })

var child = proc.exec('electron .')
