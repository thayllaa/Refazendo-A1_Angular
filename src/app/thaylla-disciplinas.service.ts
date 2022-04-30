import { Injectable } from '@angular/core';

interface Disciplinas {
  id: string;
  name: string;
  day: string;
  hour: string;
  ement: string;
}

@Injectable()
export class ThayllaDisciplinasService {

  lista: Array<Disciplinas> = [
    {
      id: "IBD006",
      name: "Banco de Dados",
      day: "Quarta-feira",
      hour: "9h30 - 13h",
      ement: "",
    },
    {
      id: "IDS001",
      name: "Desenvolvimento para Servidores I",
      day: "Segunda-feira",
      hour: "9h30 - 13h",
      ement: "",
    },
    {
      id: "IDS002",
      name: "Desenvolvimento para Servidores II",
      day: "Quinta-feira",
      hour: "19h - 22h30",
      ement: "",
    },
    {
      id: "ISW012",
      name: "Desenvolvimento para Dispositivos Móveis I",
      day: "Segunda-feira",
      hour: "19h - 22h30",
      ement: "",
    },
    {
      id: "AGM004",
      name: "Negócios, Marketing, Eletrônicos",
      day: "Quarta-feira",
      hour: "19h - 22h30",
      ement: "",
    },
    {
      id: "IWS011",
      name: "Projeto de Prototipagem e Testes de Usabilidade",
      day: "Sabado",
      hour: "8h - 11h30",
      ement: "",
    },
    {
      id: "ITE004",
      name: "Tópicos Especiais II",
      day: "Sexta-feira",
      hour: "19h - 22h30",
      ement: "",
    },
  ];
 
  constructor() { }

  getLista() {
    return this.lista;
  }

  addDisciplina(id: string, name: string, day: string,
    hour: string, ement: string) {
    this.lista.push({ id, name, day, hour, ement })
  }

  removeDisciplina(index: number) {
    this.lista.splice(index, 1);
  }
}