const path = {
  join: (...paths) => paths.join('/'),
  resolve: (...paths) => {
    let resolvedPath = paths.join('/');
    if (!resolvedPath.startsWith('/')) {
      resolvedPath = `/${resolvedPath}`;
    }
    if (!resolvedPath.endsWith('/')) {
      resolvedPath = `${resolvedPath}/`;
    }
    return resolvedPath;
  },
  dirname: (filepath) => {
    const parts = filepath.split('/');
    parts.pop();
    return parts.join('/');
  },
};

module.exports = path;
