const success = (msg, data) => {
  return {
    msg: msg,
    data: data,
  };
};

const uniqueId = products => {
  const productsId = products.map(product => product.id);
  const maxValue = productsId.reduce((a, b) => Math.max(a, b));
  const uniqueId = maxValue + 1;
  return uniqueId;
};

module.exports = {
  success,
  uniqueId,
};
