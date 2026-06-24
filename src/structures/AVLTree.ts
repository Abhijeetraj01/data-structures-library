class AVLNode {
    value: number;
    left: AVLNode | null;
    right: AVLNode | null;
    height: number;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

export class AVLTree {
    private root: AVLNode | null;

    constructor(){
        this.root = null;
    }

    //insert a new value into the AVL tree
    insert(value: number): void {
        this.root = this.insertNode(this.root, value);
    }

    private insertNode(
        node: AVLNode | null,
        value: number
    ): AVLNode {
        if (node === null) {
            return new AVLNode(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        } else {
            return node;
        }

        return this.rebalance(node);
    }

    //check if a value exists in the AVL tree
    contains(value: number): boolean {
        return this.containsNode(this.root, value);
    }

    private containsNode(
        node: AVLNode | null,
        value: number
    ): boolean {
        if (node === null) {
            return false;
        }

        if (value === node.value) {
            return true;
        }

        if (value < node.value) {
            return this.containsNode(node.left, value);
        }

        return this.containsNode(node.right, value);
    }

    //inorder traversal of the AVL tree
    inOrder(): void {
        this.inOrderTraversal(this.root);
    }

    private inOrderTraversal(
        node: AVLNode | null
    ): void {
        if (node === null) {
            return;
        }

        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
    }

    //preorder traversal of the AVL tree
    preorder(): void {
        this.preOrderTraversal(this.root);
    }

    private preOrderTraversal(
        node: AVLNode | null
    ): void {
        if (node === null) {
            return;
        }

        console.log(node.value);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    //postorder traversal of the AVL tree
    postorder(): void {
        this.postOrderTraversal(this.root);
    }

    private postOrderTraversal(
        node: AVLNode | null
    ): void {
        if (node === null) {
            return;
        }

        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.value);
    }

    //minimum value in the AVL tree
    findMin(): number | null {
        if (this.root === null) {
            return null;
        }

        return this.findMinNode(this.root).value;
    }

    //maximum value in the AVL tree
    findMax(): number | null {
        if (this.root === null) {
            return null;
        }

        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }

        return current.value;
    }

    //delete a node from the AVL tree
    delete(value: number): void {
        this.root = this.deleteNode(this.root, value);
    }

    private deleteNode(
        node: AVLNode | null,
        value: number
    ): AVLNode | null {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }

            const successor = this.findMinNode(node.right);
            node.value = successor.value;
            node.right = this.deleteNode(node.right, successor.value);
        }

        return this.rebalance(node);
    }

    private findMinNode(node: AVLNode | null): AVLNode {
        if (node === null) {
            throw new Error("Node cannot be null");
        }

        while (node.left !== null) {
            node = node.left;
        }

        return node;
    }

    private getHeight(
        node: AVLNode | null
    ): number {
        return node === null ? 0 : node.height;
    }

    private updateHeight(node: AVLNode): void {
        node.height = 1 + Math.max(
            this.getHeight(node.left),
            this.getHeight(node.right)
        );
    }

    private getBalance(
        node: AVLNode | null
    ): number {
        if (node === null) {
            return 0;
        }

        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    private rotateRight(y: AVLNode): AVLNode {
        const x = y.left;
        if (x === null) {
            return y;
        }

        const temp = x.right;

        x.right = y;
        y.left = temp;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    private rotateLeft(x: AVLNode): AVLNode {
        const y = x.right;
        if (y === null) {
            return x;
        }

        const temp = y.left;

        y.left = x;
        x.right = temp;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    private rebalance(node: AVLNode): AVLNode {
        this.updateHeight(node);

        const balance = this.getBalance(node);

        // Left Left case
        if (balance > 1 && this.getBalance(node.left) >= 0) {
            return this.rotateRight(node);
        }

        // Left Right case
        if (balance > 1 && this.getBalance(node.left) < 0) {
            if (node.left !== null) {
                node.left = this.rotateLeft(node.left);
            }
            return this.rotateRight(node);
        }

        // Right Right case
        if (balance < -1 && this.getBalance(node.right) <= 0) {
            return this.rotateLeft(node);
        }

        // Right Left case
        if (balance < -1 && this.getBalance(node.right) > 0) {
            if (node.right !== null) {
                node.right = this.rotateRight(node.right);
            }
            return this.rotateLeft(node);
        }

        return node;
    }
}
