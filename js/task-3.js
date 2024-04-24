function getElementWidth(content, padding, border) {
  const toNumber = Number.parseInt(content) + Number.parseInt(padding) + Number.parseInt(border);
  return toNumber;
}
