import { UserManagerV1 } from "./UserManagerV1";
import { UserManagerV2, EmailNotification } from "./UserManagerV2";

console.log("=== Exercício 2 - Gerenciamento de Usuários e Notificações ===\n");
console.log("=".repeat(60));

console.log("\n>>> VERSÃO 1: UserManager com Múltiplas Responsabilidades <<<");
console.log("(Baixa Coesão e Alto Acoplamento)\n");

const userManagerV1 = new UserManagerV1();

userManagerV1.createUser("João Silva", "joao@email.com");
userManagerV1.createUser("Maria Santos", "maria@email.com");
userManagerV1.createUser("Pedro Costa", "pedro@email.com");

userManagerV1.displayUsers();

console.log("\n" + "=".repeat(60));

console.log("\n>>> VERSÃO 2: Responsabilidades Separadas <<<");
console.log("(Alta Coesão e Baixo Acoplamento)\n");

const emailNotification = new EmailNotification();

const userManagerV2 = new UserManagerV2(emailNotification);

const user1 = userManagerV2.createUser("Ana Paula", "ana@email.com");
const user2 = userManagerV2.createUser("Carlos Eduardo", "carlos@email.com");
const user3 = userManagerV2.createUser("Beatriz Lima", "beatriz@email.com");

userManagerV2.displayUsers();

console.log("\n--- Enviando outros tipos de email ---");
emailNotification.sendPasswordResetEmail(
  user1,
  "https://example.com/reset/abc123"
);
emailNotification.sendNotificationEmail(user2, "Você tem uma nova mensagem!");

console.log("\n" + "=".repeat(60));
console.log("\n>>> COMPARAÇÃO <<<");
console.log("\nVersão 1 (Problemática):");
console.log("- UserManager mistura lógica de usuário e notificação");
console.log("- Difícil trocar o método de notificação (ex: SMS, Push)");
console.log("- Testes precisam mockar funcionalidades de email");
console.log("- Baixa coesão: classe faz coisas não relacionadas");

console.log("\nVersão 2 (Melhorada):");
console.log("- UserManager focado apenas em gerenciar usuários");
console.log("- EmailNotification focado apenas em enviar emails");
console.log("- Fácil substituir EmailNotification por outra classe");
console.log("- Alta coesão: cada classe tem uma responsabilidade clara");
console.log("- Baixo acoplamento: dependências injetadas");
