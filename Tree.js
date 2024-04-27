class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  setRoot(node) {
    this.root = node;
  }

  // Рекурсивна функція для відображення структури дерева у консолі
  display(node, depth) {
    console.log("  ".repeat(depth) + "- " + node.value);
    node.children.forEach(child => {
      this.display(child, depth + 1);
    });
  }
}

// Створення дерева для теми "Стратегії ведення бізнесу"
const businessStrategiesTree = new Tree();

// Визначення кореневого вузла
const rootNode = new TreeNode('Стратегії ведення бізнесу');

// Додавання дочірніх вузлів
rootNode.addChild(new TreeNode('Вибір стратегій маркетингу'));
rootNode.addChild(new TreeNode('Розробка нових продуктів'));
rootNode.addChild(new TreeNode('Оптимізація процесів'));

// Встановлення кореневого вузла
businessStrategiesTree.setRoot(rootNode);

// Виведення структури дерева у консолі
businessStrategiesTree.display(businessStrategiesTree.root, 0);

