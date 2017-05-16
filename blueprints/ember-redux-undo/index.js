module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'redux-undo', target: '1.0.0-beta9-8'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
