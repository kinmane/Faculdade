interface User {
  id: number;
  name: string;
  email: string;
}

class EmailNotification {
  send(to: string, subject: string, message: string): void {
    console.log(`\n[EMAIL ENVIADO]`);
    console.log(`Para: ${to}`);
    console.log(`Assunto: ${subject}`);
    console.log(`Mensagem: ${message}\n`);
  }

  sendWelcomeEmail(user: User): void {
    this.send(
      user.email,
      "Bem-vindo!",
      `Olá ${user.name}, sua conta foi criada com sucesso!`
    );
  }

  sendPasswordResetEmail(user: User, resetLink: string): void {
    this.send(
      user.email,
      "Recuperação de Senha",
      `Olá ${user.name}, clique no link para redefinir sua senha: ${resetLink}`
    );
  }

  sendNotificationEmail(user: User, notification: string): void {
    this.send(
      user.email,
      "Nova Notificação",
      `Olá ${user.name}, ${notification}`
    );
  }
}

class UserManagerV2 {
  private users: User[];
  private nextId: number;
  private emailNotification: EmailNotification;

  constructor(emailNotification: EmailNotification) {
    this.users = [];
    this.nextId = 1;
    this.emailNotification = emailNotification;
  }

  createUser(name: string, email: string): User {
    const user: User = {
      id: this.nextId++,
      name,
      email,
    };
    this.users.push(user);
    console.log(`✓ Usuário criado: ${user.name} (${user.email})`);

    this.emailNotification.sendWelcomeEmail(user);

    return user;
  }

  getUsers(): User[] {
    return [...this.users];
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  deleteUser(id: number): boolean {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      const user = this.users[index];
      this.users.splice(index, 1);
      console.log(`✓ Usuário ${user.name} removido.`);
      return true;
    }
    console.log(`✗ Usuário com ID ${id} não encontrado.`);
    return false;
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

export { UserManagerV2, EmailNotification, User };
