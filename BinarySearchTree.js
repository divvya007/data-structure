// binary search tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(root, key) {
    console.log(root, key);
    if (root === null) {
      root = new Node(key);
      console.log("root inside if:", root);
      return;
    }
    let q = [];
    console.log(q.push(key));

    while (queue.length !== 0) {
      temp = q.pop();
    }
  }
}
const node = new Node(7);
node.left = new Node(4);
node.right = new Node(6);
node.left.left = new Node(3);
node.right.left = new Node(13);
node.right.right = new Node(14);
let key = 12;
debugger;
console.log(node.insert(node, key));
