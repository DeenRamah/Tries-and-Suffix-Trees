class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start: number;
    end: number | null;

    constructor(start: number, end: number | null) {
        this.children = new Map<string, SuffixTreeNode>();
        this.start = start;
        this.end = end;
    }
}

class SuffixTree {
    root: SuffixTreeNode;
    text: string;

    constructor(text: string) {
        this.root = new SuffixTreeNode(-1, null);
        this.text = text;
        this.buildSuffixTree();
    }

    buildSuffixTree(): void {
        for (let i = 0; i < this.text.length; i++) {
            this.insertSuffix(this.text.substring(i), i);
        }
    }

    insertSuffix(suffix: string, index: number): void {
        let node = this.root;
        for (let char of suffix) {
            if (!node.children.has(char)) {
                node.children.set(char, new SuffixTreeNode(index, null));
            }
            node = node.children.get(char)!;
        }
    }

    printTree(node: SuffixTreeNode = this.root, depth: number = 0): void {
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
