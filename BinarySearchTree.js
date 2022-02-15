// binary search tree

console.log("..........binary tree search.............");
console.log("..........binary tree search.............");
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function insert(root, key) {
  console.log(root, key);
  if (root === null) {
    console.log("before:", this);
    root = new Node(key);
    console.log("root inside if:", root);
    console.log("after:", this);
    return;
  }
  let q = [];
  console.log("q.push(root):", q.push(root));
  q.push(root);

  while (q.length !== 0) {
    console.log("q.length", q.length);
    root = q.pop();
    console.log("root.pop:", root);
    console.log("q:", q);

    if (root.left === null) {
      root.left = new Node(key);
      break;
    } else {
      q.push(root.left);
      console.log(q.push(root.left));
    }
    if (root.right === null) {
      root.right = new Node(key);
      break;
    } else {
      q.push(root.right);
      console.log(q.push(root.right));
    }
  }
}

const node = new Node(null);
// node.left = new Node(4);
// node.right = new Node(6);
// node.left.left = new Node(3);
// node.right.left = new Node(13);
// node.right.right = new Node(14);
let key = 12;
// debugger;
console.log(node);
console.log(insert(node, key));
