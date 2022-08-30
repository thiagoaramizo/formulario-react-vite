import IBloco from "./IBloco";

export default interface IDocumento {
    id: string,
    titulo: string,
    blocos: Array<IBloco>
}