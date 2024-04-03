export function generateSlug(text: string): string {
    return text
      .normalize('NFD') // Separa os acentos dos caracteres
      .replace(/[\u0300-\u036f]/g, '') // Remove os acentos
      .replace(/[^a-zA-Z0-9 ]/g, '') // Remove os símbolos
      .trim() // Remove espaços no início e no fim
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .toLowerCase(); // Converte para minúsculas
  }
  
  // Exemplo de uso:
  //const titulo = 'Exemplo de Título com Acentuação!';
  //const slug = gerarSlug(titulo);
  //console.log(slug); // Saída: 'exemplo-de-titulo-com-acentuacao'
  