package br.senai.sp.livro.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import br.senai.sp.livro.model.Livro;

@Repository
public class LivroDAO {

	@Autowired
	JdbcTemplate jdbcTemplate;

	public List<Livro> listarTodos() {
		String sql = "SELECT ANODEPUBLICACAO, PRECO, NOME, AUTOR, GENERO, EDITORA, QTDESTOQUE, DESCRICAO, IMAGEM FROM LIVRO";
		List<Livro> lista = jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Livro.class));
		return lista;
	}

	public Livro PegarPorId(int idLivro) {

		String sql = "SELECT ANODEPUBLICACAO, PRECO, NOME, AUTOR, GENERO, EDITORA, QTDESTOQUE, DESCRICAO, IMAGEM  FROM LIVRO WHERE IDLIVRO = ?";
		Object[] params = { idLivro };
		Livro a = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Livro.class), params);
		return a;

	}
	
	public Livro buscarPorValor(String valor) {

		String sql = "SELECT ANODEPUBLICACAO, PRECO, NOME, AUTOR, GENERO, EDITORA, QTDESTOQUE, DESCRICAO, IMAGEM  "
				+ "FROM LIVRO "
				+ "WHERE ANODEPUBLICACAO like '%" + valor + "%'"
				+ "OR NOME like '%" + valor + "%'"
				+ "OR AUTOR like '%" + valor + "%'"
				+ "OR GENERO like '%" + valor + "%'"
				+ "OR EDITORA like '%" + valor + "%'"
				+ "OR QTDESTOQUE like '%" + valor + "%'"
				+ "OR DESCRICAO like '%" + valor + "%'"
		        + "OR IMAGEM like '%" + valor + "%'";
				
				
		Object[] params = { valor };
		Livro a = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Livro.class), params);
		return a;

	}
	

	public int Novo(Livro a) {

		String sql = "INSERT INTO LIVRO (ANODEPUBLICACAO, PRECO, NOME, AUTOR, GENERO, EDITORA, QTDESTOQUE, DESCRICAO, IMAGEM) VALUES (?,?,?,?,?,?,?,?,?)";
		int result = jdbcTemplate.update(sql, a.getAnoDePublicacao(), a.getPreco(), a.getNome(), a.getAutor(), 
				a.getGenero(), a.getEditora(), a.getQtdEstoque(), a.getDescricao(), a.getImagem());

		return result;		
	}

	public int Editar(Livro a, int idLivro) {
		String sql = "UPDATE LIVRO SET ANODEPUBLICACAO=?, PRECO=?, NOME=?, AUTOR=?, GENERO=?, EDITORA=?, QTDESTOQUE=?, DESCRICAO=?, IMAGEM=? WHERE IDLIVRO =?";
		Object[] params = { a.getAnoDePublicacao(), a.getPreco(), a.getNome(), a.getAutor(), a.getGenero(),
				a.getEditora(), a.getQtdEstoque(), a.getDescricao(), a.getImagem() };
		int result = jdbcTemplate.update(sql, params, idLivro);
		return result;
	}

	public int Deletar(int idLivro) {
		String sql = "DELETE FROM LIVRO WHERE IDLIVRO =?";
		Object[] params = { idLivro };
		int result = jdbcTemplate.update(sql, params, idLivro);
		return result;
	}
}
