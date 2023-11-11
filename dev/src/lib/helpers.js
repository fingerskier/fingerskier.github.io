function snakeToCapitalized(str) {
  return str
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


export {
  snakeToCapitalized,
}