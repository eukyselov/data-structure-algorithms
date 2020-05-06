class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  find(data) {
    return this.search(this.root, data);
  }

  search(node, data) {
    if (node === null) return null;
    if (data > node.data) return this.search(node.right, data);
    else if (data < node.data) return this.search(node.left, data);
    else return node;
  }

  rotateLeft(data) {
    const node = this.find(data);
    if (node === null) return -1;

    const newNode = node.right;
    node.right = newNode.left;
    newNode.left = node;

    return newNode;
  }

  remove(data) {

  }

  findMinNode() {

  }

  getRootNode() {

  }

  inorder(node) {

  }

  preorder(node) {

  }

  postorder(node) {

  }

  getNode(node) {

  }

  getFullTree() {
    return this.root;
  }
}
