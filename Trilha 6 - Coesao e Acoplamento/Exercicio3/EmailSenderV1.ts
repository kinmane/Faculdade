interface Contact {
  name: string;
  email: string;
}

class EmailSenderV1 {
  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private validateName(name: string): boolean {
    return name.trim().length >= 3;
  }

  private validateContact(contact: Contact): string[] {
    const errors: string[] = [];

    if (!this.validateName(contact.name)) {
      errors.push("Nome deve ter pelo menos 3 caracteres.");
    }

    if (!this.validateEmail(contact.email)) {
      errors.push("Email inválido.");
    }

    return errors;
  }

  sendEmail(contact: Contact, subject: string, message: string): boolean {
    console.log(`\n--- Tentando enviar email para ${contact.name} ---`);

    const errors = this.validateContact(contact);

    if (errors.length > 0) {
      console.log("✗ Erro ao enviar email:");
      errors.forEach((error) => console.log(`  - ${error}`));
      return false;
    }

    console.log(`\n[EMAIL ENVIADO COM SUCESSO]`);
    console.log(`Para: ${contact.name} <${contact.email}>`);
    console.log(`Assunto: ${subject}`);
    console.log(`Mensagem: ${message}\n`);

    return true;
  }

  sendBulkEmails(contacts: Contact[], subject: string, message: string): void {
    console.log(
      `\n=== Enviando emails em massa para ${contacts.length} contatos ===`
    );
    let successCount = 0;
    let failCount = 0;

    contacts.forEach((contact) => {
      if (this.sendEmail(contact, subject, message)) {
        successCount++;
      } else {
        failCount++;
      }
    });

    console.log(
      `\nResultado: ${successCount} enviados, ${failCount} falharam.`
    );
  }
}

export { EmailSenderV1, Contact };
