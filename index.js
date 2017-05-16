/* jshint node: true */
'use strict';

const mergeTrees = require('broccoli-merge-trees')
const path = require('path')

module.exports = {
  name: 'ember-redux-undo',

  treeForAddon (tree) {
    const reduxUndoPath = path.dirname(require.resolve('redux-undo/redux-undo.js'))
    let reduxUndoTree = this.treeGenerator(reduxUndoPath)

    if (!tree) {
      return this._super.treeForAddon.call(this, reduxUndoTree)
    }

    const trees = mergeTrees([reduxUndoTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
};
