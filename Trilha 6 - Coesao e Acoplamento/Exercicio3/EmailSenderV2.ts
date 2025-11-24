interface Contact {
  name: string;
  email: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

class ContactValidator {
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validateName(name: string): boolean {
    return name.trim().length >= 3;
  }

  validate(contact: Contact): ValidationResult {
    const errors: string[] = [];

    if (!this.validateName(contact.name)) {
      errors.push("Nome deve ter pelo menos 3 caracteres.");
    }

    if (!this.validateEmail(contact.email)) {
      errors.push("Email inválido.");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  validateMultiple(contacts: Contact[]): Map<Contact, ValidationResult> {
    const results = new Map<Contact, ValidationResult>();
    contacts.forEach((contact) => {
      results.set(contact, this.validate(contact));
    });
    return results;
  }
}

class EmailSenderV2 {
  private validator: ContactValidator;

  constructor(validator: ContactValidator) {
    this.validator = validator;
  }

  sendEmail(contact: Contact, subject: string, message: string): boolean {
    console.log(`\n--- Tentando enviar email para ${contact.name} ---`);

    const validationResult = this.validator.validate(contact);

    if (!validationResult.isValid) {
      console.log("✗ Erro ao enviar email:");
      validationResult.errors.forEach((error) => console.log(`  - ${error}`));
      return false;
    }

    this.performSend(contact, subject, message);
    return true;
  }

  private performSend(
    contact: Contact,
    subject: string,
    message: string
  ): void {
    console.log(`\n[EMAIL ENVIADO COM SUCESSO]`);
    console.log(`Para: ${contact.name} <${contact.email}>`);
    console.log(`Assunto: ${subject}`);
    console.log(`Mensagem: ${message}\n`);
  }

  sendBulkEmails(contacts: Contact[], subject: string, message: string): void {
    console.log(
      `\n=== Enviando emails em massa para ${contacts.length} contatos ===`
    );
    let successCount = 0;
    let failCount = 0;

    const validationResults = this.validator.validateMultiple(contacts);

    validationResults.forEach((result, contact) => {
      if (result.isValid) {
        this.performSend(contact, subject, message);
        successCount++;
      } else {
        console.log(`\n✗ Contato inválido: ${contact.name} (${contact.email})`);
        result.errors.forEach((error) => console.log(`  - ${error}`));
        failCount++;
      }
    });

    console.log(
      `\nResultado: ${successCount} enviados, ${failCount} falharam.`
    );
  }
}

export { EmailSenderV2, ContactValidator, Contact, ValidationResult };
