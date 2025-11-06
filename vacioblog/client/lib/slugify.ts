export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // elimina emojis y símbolos
    .trim()
    .replace(/\s+/g, "-"); // convierte espacios en guiones
