abstract class VoteSystem {
  abstract voteFor(candidate: string): void;
  abstract getResults(): object;
}

class Election extends VoteSystem {
  private votes: Record<string, number>;

  constructor() {
    super();
    this.votes = {};
  }

  voteFor(candidate: string): void {
    if (this.votes[candidate]) {
      this.votes[candidate]++;
    } else {
      this.votes[candidate] = 1;
    }
    console.log(`Voto registrado para "${candidate}".`);
  }

  getResults(): Record<string, number> {
    return { ...this.votes };
  }

  displayResults(): void {
    console.log("\n=== Resultados da Eleição ===");
    const results = Object.entries(this.votes);
    if (results.length === 0) {
      console.log("Nenhum voto registrado.");
      return;
    }

    const totalVotes = Object.values(this.votes).reduce((a, b) => a + b, 0);
    console.log(`Total de votos: ${totalVotes}\n`);

    results.forEach(([candidate, votes]) => {
      const percentage = ((votes / totalVotes) * 100).toFixed(2);
      console.log(`${candidate}: ${votes} votos (${percentage}%)`);
    });
  }
}

class Poll extends VoteSystem {
  private votes: Record<string, number>;

  constructor() {
    super();
    this.votes = {};
  }

  voteFor(candidate: string): void {
    if (this.votes[candidate]) {
      this.votes[candidate]++;
    } else {
      this.votes[candidate] = 1;
    }
    console.log(`Voto registrado para "${candidate}".`);
  }

  getResults(): Array<{ candidate: string; votes: number }> {
    // Retorna os candidatos ordenados por número de votos (decrescente)
    return Object.entries(this.votes)
      .map(([candidate, votes]) => ({ candidate, votes }))
      .sort((a, b) => b.votes - a.votes);
  }

  displayResults(): void {
    console.log("\n=== Resultados da Enquete (Ranking) ===");
    const results = this.getResults();
    if (results.length === 0) {
      console.log("Nenhum voto registrado.");
      return;
    }

    const totalVotes = results.reduce((sum, item) => sum + item.votes, 0);
    console.log(`Total de votos: ${totalVotes}\n`);

    results.forEach((result, index) => {
      const percentage = ((result.votes / totalVotes) * 100).toFixed(2);
      console.log(
        `${index + 1}º lugar: ${result.candidate} - ${
          result.votes
        } votos (${percentage}%)`
      );
    });
  }
}

export { VoteSystem, Election, Poll };
