// CLASSE MÃE - A base de todo voo
class Voo {
    constructor(codigo, origem, destino) {
        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.altitude = 0; // Começa no chão
    }

    decolar() {
        this.altitude = 10000;
        return `Voo ${this.codigo} decolou. Altitude: ${this.altitude} pés.`;
    }

    pousar() {
        this.altitude = 0;
        return `Voo ${this.codigo} pousou com segurança.`;
    }
}

// SUBCLASSE 1 - Jato Executivo (Foco em velocidade e altitude)
class JatoExecutivo extends Voo {
    constructor(codigo, origem, destino) {
        // super() envia os dados para o constructor da classe Voo
        super(codigo, origem, destino);
        this.modoSupersonico = false;
    }

    ativarSupersonico() {
        if (this.altitude > 0) {
            this.modoSupersonico = true;
            this.altitude = 45000; // Sobe drasticamente
            return "Modo Supersônico ATIVADO! Altitude aumentada para 45.000 pés.";
        }
        return "Erro: O jato precisa estar em voo para ativar modo supersônico.";
    }

    desativarSupersonico() {
        this.modoSupersonico = false;
        this.altitude = 10000; // Volta para altitude normal
        return "Modo Supersônico DESATIVADO. Retornando para 10.000 pés.";
    }
}

// SUBCLASSE 2 - Voo de Carga (Foco em peso e logística)
class VooCarga extends Voo {
    constructor(codigo, origem, destino, capacidadeMaxima) {
        super(codigo, origem, destino);
        this.capacidadeMaxima = capacidadeMaxima;
        this.cargaAtual = 0;
    }

    embarcarCarga(peso) {
        if (this.cargaAtual + peso <= this.capacidadeMaxima) {
            this.cargaAtual += peso;
            return `Sucesso: ${peso}kg embarcados. Carga total: ${this.cargaAtual}kg.`;
        } else {
            return `Alerta: Peso excedido! Capacidade máxima é ${this.capacidadeMaxima}kg.`;
        }
    }
}

// --- INSTANCIAÇÃO PARA O TESTE (Simulação) ---
const meuJato = new JatoExecutivo("JATO-007", "São Paulo", "Paris");
const meuCargueiro = new VooCarga("CARGO-101", "Manaus", "Miami", 50000);
