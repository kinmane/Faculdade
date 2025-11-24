import { EmailSenderV1 } from "./EmailSenderV1";
import { EmailSenderV2, ContactValidator } from "./EmailSenderV2";

console.log("=== Exercício 3 - Envio de Emails e Validação de Contato ===\n");
console.log("=".repeat(60));

console.log("\n>>> VERSÃO 1: EmailSender com Validação Embutida <<<");
console.log("(Baixa Coesão e Alto Acoplamento)\n");

const emailSenderV1 = new EmailSenderV1();

const contacts1 = [
  { name: "João Silva", email: "joao@email.com" },
  { name: "Maria Santos", email: "maria@email.com" },
  { name: "Jo", email: "jo@email.com" },
  { name: "Pedro Costa", email: "pedro.email.com" },
  { name: "Ana Paula", email: "ana@email" },
];

emailSenderV1.sendEmail(
  contacts1[0],
  "Bem-vindo!",
  "Olá, seja bem-vindo ao nosso sistema!"
);

emailSenderV1.sendEmail(
  contacts1[2],
  "Teste",
  "Este email não deve ser enviado."
);

emailSenderV1.sendBulkEmails(
  contacts1,
  "Newsletter Mensal",
  "Confira as novidades deste mês!"
);

console.log("\n" + "=".repeat(60));

console.log("\n>>> VERSÃO 2: Validação Separada <<<");
console.log("(Alta Coesão e Baixo Acoplamento)\n");

const validator = new ContactValidator();

const emailSenderV2 = new EmailSenderV2(validator);

const contacts2 = [
  { name: "Carlos Eduardo", email: "carlos@email.com" },
  { name: "Beatriz Lima", email: "beatriz@email.com" },
  { name: "Lu", email: "lu@email.com" },
  { name: "Rafael Souza", email: "rafael.email.com" },
  { name: "Fernanda Costa", email: "fernanda@email" },
];

emailSenderV2.sendEmail(
  contacts2[0],
  "Bem-vindo!",
  "Olá, seja bem-vindo ao nosso sistema!"
);

emailSenderV2.sendEmail(
  contacts2[2],
  "Teste",
  "Este email não deve ser enviado."
);

console.log("\n--- Testando validação direta ---");
const validationResult = validator.validate(contacts2[3]);
console.log(`Contato: ${contacts2[3].name}`);
console.log(`Válido: ${validationResult.isValid}`);
if (!validationResult.isValid) {
  console.log("Erros:");
  validationResult.errors.forEach((error) => console.log(`  - ${error}`));
}

emailSenderV2.sendBulkEmails(
  contacts2,
  "Newsletter Mensal",
  "Confira as novidades deste mês!"
);

console.log("\n" + "=".repeat(60));
console.log("\n>>> COMPARAÇÃO <<<");
console.log("\nVersão 1 (Problemática):");
console.log("- EmailSender mistura validação e envio");
console.log("- Difícil reutilizar a lógica de validação em outros lugares");
console.log("- Difícil testar validação e envio separadamente");
console.log("- Mudanças na validação afetam a classe de envio");

console.log("\nVersão 2 (Melhorada):");
console.log("- ContactValidator focado apenas em validar");
console.log("- EmailSender focado apenas em enviar");
console.log("- Validação pode ser reutilizada em outros contextos");
console.log("- Fácil testar cada componente isoladamente");
console.log("- Baixo acoplamento através de injeção de dependências");
console.log("- Mudanças na validação não afetam a lógica de envio");
