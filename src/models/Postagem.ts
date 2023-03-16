import Tema from './Tema'

interface Postagem{
    id: number;
    nome: string;
    telefone: string;
    endereco: string;
    horario: string;
    dias: string;
    tema?: Tema| null
}

export default Postagem;