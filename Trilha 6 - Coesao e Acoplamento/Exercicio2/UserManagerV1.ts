interface User {
  id: number;
  name: string;
  email: string;
}

class UserManagerV1 {
  private users: User[];
  private nextId: number;

  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  createUser(name: string, email: string): User {
    const user: User = {
      id: this.nextId++,
      name,
      email,
    };
    this.users.push(user);
    console.log(`Usuário criado: ${user.name} (${user.email})`);

    this.sendEmail(
      user.email,
      "Bem-vindo!",
      `Olá ${user.name}, sua conta foi criada com sucesso!`
    );

    return user;
  }

  private sendEmail(to: string, subject: string, message: string): void {
    console.log(`\n[EMAIL ENVIADO]`);
    console.log(`Para: ${to}`);
    console.log(`Assunto: ${subject}`);
    console.log(`Mensagem: ${message}\n`);
  }

  getUsers(): User[] {
    return [...this.users];
  }

  displayUsers(): void {
    console.log("\n=== Usuários Cadastrados ===");
    if (this.users.length === 0) {
      console.log("Nenhum usuário cadastrado.");
      return;
    }
    this.users.forEach((user) => {
      console.log(`#${user.id} - ${user.name} (${user.email})`);
    });
  }
}

export { UserManagerV1, User };
