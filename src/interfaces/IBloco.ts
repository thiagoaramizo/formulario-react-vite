export default interface IBloco {
    id: string,
    tipo: string,
    conteudo: {
        titulo?: string,
        texto?: string,
        link?: string,
        itens?: Array<object>
    }
}