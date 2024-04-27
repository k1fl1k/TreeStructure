const decisionTree = {
  "Визначення проблеми або завдання": null,
  "Збір і аналіз даних": null,
  "Визначення альтернативних варіантів": {
    "Побудова дерева рішень": null,
    "Створення списку варіантів": null,
    "Аналіз переваг і недоліків кожного варіанту": null
  },
  "Побудова дерева рішень": {
    "Ідентифікація ключових факторів": null,
    "Побудова структури дерева": null,
    "Визначення альтернативних варіантів рішень": null
  },
  "Оцінка альтернатив": {
    "Використання методів оцінки": null,
    "Порівняння варіантів за кількісними та якісними критеріями": null
  },
  "Вибір оптимального варіанту": null,
  "Реалізація та контроль": {
    "Планування впровадження": null,
    "Виконання плану": null,
    "Моніторинг та контроль": null
  },
  "Оцінка результатів": null
};

// Функція для виведення дерева
function printDecisionTree(tree, indent = 0) {
  for (const key in tree) {
    if (Object.prototype.hasOwnProperty.call(tree, key)) {
      console.log("\t".repeat(indent) + "- " + key);
      if (typeof tree[key] === 'object' && tree[key] !== null) {
        printDecisionTree(tree[key], indent + 1);
      }
    }
  }
}

printDecisionTree(decisionTree);
