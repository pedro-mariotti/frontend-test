import axios from 'axios';
 
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3333/api',
  timeout: 8000,
});
 
/**
 * Busca a lista de produtos (cardápio) no backend.
 * Espera um retorno no formato:
 * [{ id, nome, descricao, preco, categoria, imagem }]
 */
export const getProdutos = async () => {
  const { data } = await api.get('/produtos');
  return data;
};
 
/**
 * Busca informações gerais da loja (nome, horário, endereço).
 * Espera um retorno no formato:
 * { nome, horario, endereco, telefone }
 */
export const getInfoLoja = async () => {
  const { data } = await api.get('/loja');
  return data;
};
 
export default api;
