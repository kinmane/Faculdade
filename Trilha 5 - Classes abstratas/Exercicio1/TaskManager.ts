abstract class TaskManager {
  abstract addTask(task: string): void;
  abstract listTasks(): string[];
}

interface Task {
  description: string;
  type: "project" | "daily";
}

class Project extends TaskManager {
  private tasks: Task[];
  private projectName: string;

  constructor(projectName: string) {
    super();
    this.projectName = projectName;
    this.tasks = [];
  }

  addTask(task: string): void {
    // Verifica se a tarefa já existe
    const taskExists = this.tasks.some(
      (t) => t.description === task && t.type === "project"
    );

    if (taskExists) {
      console.log(`Tarefa "${task}" já existe no projeto.`);
      return;
    }

    this.tasks.push({ description: task, type: "project" });
    console.log(`Tarefa "${task}" adicionada ao projeto "${this.projectName}".`);
  }

  listTasks(): string[] {
    return this.tasks.map((t) => t.description);
  }

  getProjectName(): string {
    return this.projectName;
  }

  displayTasks(): void {
    console.log(`\n=== Tarefas do Projeto: ${this.projectName} ===`);
    if (this.tasks.length === 0) {
      console.log("Nenhuma tarefa cadastrada.");
      return;
    }
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.description}`);
    });
  }
}

class DailyTasks extends TaskManager {
  private tasks: Task[];

  constructor() {
    super();
    this.tasks = [];
  }

  addTask(task: string): void {
    // Verifica se a tarefa já existe
    const taskExists = this.tasks.some(
      (t) => t.description === task && t.type === "daily"
    );

    if (taskExists) {
      console.log(`Tarefa diária "${task}" já existe.`);
      return;
    }

    this.tasks.push({ description: task, type: "daily" });
    console.log(`Tarefa diária "${task}" adicionada.`);
  }

  listTasks(): string[] {
    return this.tasks.map((t) => t.description);
  }

  displayTasks(): void {
    console.log("\n=== Tarefas Diárias ===");
    if (this.tasks.length === 0) {
      console.log("Nenhuma tarefa cadastrada.");
      return;
    }
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.description}`);
    });
  }
}

export { TaskManager, Project, DailyTasks };
