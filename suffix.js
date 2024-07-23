class SuffixTreeNode {
    constructor(start, end) {
        this.children = new Map();
        this.start = start;
        this.end = end;
    }
}

class SuffixTree {
    constructor(text) {
        this.root = new SuffixTreeNode(-1, null);
        this.text = text;
        this.buildSuffixTree();
    }

    buildSuffixTree() {
        for (let i = 0; i < this.text.length; i++) {
            this.insertSuffix(this.text.substring(i), i);
        }
    }

    insertSuffix(suffix, index) {
        let node = this.root;
        for (let char of suffix) {
            if (!node.children.has(char)) {
                node.children.set(char, new SuffixTreeNode(index, null));
            }
            node = node.children.get(char);
        }
    }

    printTree(node = this.root, depth = 0) {
        if (node.start !== -1) {
            console.log(" ".repeat(depth) + this.text.substring(node.start, node.end ?? this.text.length));
        }
        for (let [char, child] of node.children) {
            this.printTree(child, depth + 1);
        }
    }
}

// Usage
const text = "banana";
const suffixTree = new SuffixTree(text);
suffixTree.printTree();
