function getElementWidth(content, padding, border) {
  const toNumber =
    Number.parseInt(content) + Number.parseInt(padding) * 2 + Number.parseFloat(border) * 2;
  return toNumber;
}
