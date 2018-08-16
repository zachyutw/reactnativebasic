export const INCRE = "_template/INCRE";
export const DECRE = "_template/DECRE";
export const RESET = "_template/RESET";

export function incre() {
    return {type: INCRE};
}
export function decre() {
    return { type: DECRE};
}
export function reset() {
    return { type: RESET };
}