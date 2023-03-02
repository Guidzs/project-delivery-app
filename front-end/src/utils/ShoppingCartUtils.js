function addItem(cart, item, callback) {
  callback([...cart, item]);
}

function rmItem(cart, index, callback) {
  const newCart = cart.splice(index, 1);
  callback(newCart);
}

function updateItem() {

}

module.exports = {
  addItem,
  rmItem,
  updateItem,
};
