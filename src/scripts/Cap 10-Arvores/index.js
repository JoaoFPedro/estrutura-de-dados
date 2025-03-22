class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      console.log("THIS.ROOT:", this.root);
      this.insertNode(this.root, key);
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      console.log("lalalala", node.key);
      if (node.left === null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }
  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }
  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }
  min() {
    return this.minNode(this.root);
  }
  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }
  max() {
    return this.maxNode(this.root);
  }
  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }
  search(key) {
    return this.searchNode(this.root, key);
  }
  searchNode(node, key) {
    if (node == null) {
      return false;
    }
    if (this.compareFn(key, node.key) == Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
  removeNode(node, key) {
    if (node == null) {
      return undefined;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    // key is equal to node.item
    // handle 3 special conditions
    // 1 - a leaf node
    // 2 - a node with only 1 child
    // 3 - a node with 2 children
    // case 1
    if (node.left == null && node.right == null) {
      node = undefined;
      return node;
    }
    // case 2
    if (node.left == null) {
      node = node.right;
      return node;
    } else if (node.right == null) {
      node = node.left;
      return node;
    }
    // case 3
    const aux = this.minNode(node.right);
    node.key = aux.key;
    node.right = this.removeNode(node.right, aux.key);
    return node;
  }
}
// const tree = new BinarySearchTree();
// tree.insert(11);
// tree.insert(15);
// tree.insert(12);
// tree.insert(9);

// console.log("TREE:", tree);
// const printNode = (value) => console.log(value);
// console.log("INORDER:", tree.inOrderTraverse(printNode));
// console.log("MINODE:", tree.min());
// console.log("MAXNODE:", tree.max());

//Arvore de Adelson-Velskii e Landi (arvore AVL)

//AVL tree é uma arvore que se auto regula, uma tree que tenta se balanceear sempre que um nó é add, evitando ter + de 1 de diferença em qualquer nivel

// const BalanceFactor = {
//   UNBALANCED_RIGHT: 1,
//   SLIGHTLY_UNBALANCED_RIGHT: 2,
//   BALANCED: 3,
//   SLIGHTLY_UNBALANCED_LEFT: 4,
//   UNBALANCED_LEFT: 5,
// };
// class AVLTree extends BinarySearchTree {
//   constructor(compareFn = defaultCompare) {
//     super(compareFn);
//     this.compareFn = compareFn;
//     this.root = null;
//   }
//   getNodeHeight(node) {
//     if (node == null) {
//       return -1;
//     }
//     return (
//       Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
//       1
//     );
//   }
//   getBalanceFactor(node) {
//     const heightDifference =
//       this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
//     switch (heightDifference) {
//       case -2:
//         return BalanceFactor.UNBALANCED_RIGHT;
//       case -1:
//         return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
//       case 1:
//         return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
//       case 2:
//         return BalanceFactor.UNBALANCED_LEFT;
//       default:
//         return BalanceFactor.BALANCED;
//     }
//   }
//   /**
//    * @param node Node<T>
//    */

//   rotationLL(node) {
//     const tmp = node.left;
//     node.left = tmp.right;
//     tmp.right = node;
//     return tmp;
//   }
//   rotationRR(node) {
//     const tmp = node.right;
//     node.right = tmp.left;
//     tmp.left = node;
//     return tmp;
//   }
//   rotationRL(node) {
//     node.right = this.rotationLL(node.right);
//     return this.rotationRR(node);
//   }
//   rotationLR(node) {
//     node.left = this.rotationRR(node.left);
//     return this.rotationLL(node);
//   }
//   insert(key) {
//     this.root = this.insertNode(this.root, key);
//   }
//   insertNode(node, key) {
//     if (node == null) {
//       return new Node(key);
//     } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
//       node.left = this.insertNode(node.left, key);
//     } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
//       node.right = this.insertNode(node.right, key);
//     } else {
//       return node; // duplicated key
//     }
//     // verify if tree is balanced
//     const balanceFactor = this.getBalanceFactor(node);
//     if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
//       if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
//         // Left left case
//         node = this.rotationLL(node);
//       } else {
//         // Left right case
//         return this.rotationLR(node);
//       }
//     }
//     if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
//       if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
//         // Right right case
//         node = this.rotationRR(node);
//       } else {
//         // Right left case
//         return this.rotationRL(node);
//       }
//     }
//     return node;
//   }
//   removeNode(node, key) {
//     node = super.removeNode(node, key);
//   }
// }

//Black-red Tree
export default class RedBlackTree<T> extends BinarySearchTree<T> {
  protected root: RedBlackNode<T>;

  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
    super(compareFn);
  }

  /**
   * Left left case: rotate right
   *
   *       b                           a
   *      / \                         / \
   *     a   e -> rotationLL(b) ->   c   b
   *    / \                             / \
   *   c   d                           d   e
   *
   * @param node Node<T>
   */
  private rotationLL(node: RedBlackNode<T>) {
    const tmp = node.left;
    node.left = tmp.right;
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.right = node;
    node.parent = tmp;
  }

  /**
   * Right right case: rotate left
   *
   *     a                              b
   *    / \                            / \
   *   c   b   -> rotationRR(a) ->    a   e
   *      / \                        / \
   *     d   e                      c   d
   *
   * @param node Node<T>
   */
  private rotationRR(node: RedBlackNode<T>) {
    const tmp = node.right;
    node.right = tmp.left;
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.left = node;
    node.parent = tmp;
  }

  insert(key: T) {
    // special case: first key
    if (this.root == null) {
      this.root = new RedBlackNode(key);
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }

  protected insertNode(node: RedBlackNode<T>, key: T): RedBlackNode<T> {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new RedBlackNode(key);
        node.left.parent = node;
        return node.left;
      } else {
        return this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new RedBlackNode(key);
      node.right.parent = node;
      return node.right;
    } else {
      return this.insertNode(node.right, key);
    }
  }

  private fixTreeProperties(node: RedBlackNode<T>) {
    while (node && node.parent && node.parent.color === Colors.RED && node.color !== Colors.BLACK) {
       let parent = node.parent;
       const grandParent = parent.parent;

      // case A
      if (grandParent && grandParent.left === parent) {

        const uncle = grandParent.right;

        // case 1: uncle of node is also red - only recoloring
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // case 2: node is right child - left rotate
          if (node === parent.right) {
            this.rotationRR(parent);
            node = parent;
            parent = node.parent;
          }

          // case 3: node is left child - right rotate
          this.rotationLL(grandParent);
          // swap color
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }

      } else { // case B: parent is right child of grand parent

        const uncle = grandParent.left;

        // case 1: uncle is read - only recoloring
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // case 2: node is left child - left rotate
          if (node === parent.left) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          }

           // case 3: node is right child - left rotate
          this.rotationRR(grandParent);
          // swap color
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      }
    }
    this.root.color = Colors.BLACK;
  }

  getRoot() {
    return this.root;
  }

  /* private flipColors(node: RedBlackNode<T>) {
    node.left.flipColor();
    node.right.flipColor();
  }

  private isRed(node: RedBlackNode<T>) {
    if (!node) {
      return false;
    }
    return node.isRed();
  }*/
}