package br.senai.sp.cliente.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import br.senai.sp.livro.model.Livro;

@Repository
public class ClienteDAO {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public List<Cliente> listarTodos() {
		String sql = "SELECT NOME, CPF, EMAIL, TELEFONE, DATADENASCIMENTO, SEXO, SENHA FROM CLIENTE";
		List<Cliente> lista = jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Cliente.class));
		return lista;
	}
	
	public Cliente PegarPorId(int idCliente) {

		String sql = "SELECT NOME, CPF, EMAIL, TELEFONE, DATADENASCIMENTO, SEXO, SENHA FROM CLIENTE WHERE ID = ?";
		Object[] params = { idCliente };
		Cliente a = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Cliente.class), params);
		return a;

	}
	
	public int Novo(Cliente a) {

		String sql = "INSERT INTO CLIENTE (NOME, CPF, EMAIL, TELEFONE, DATADENASCIMENTO, SEXO, SENHA) VALUES (?,?,?,?,?,?,?)";
		int result = jdbcTemplate.update(sql, a.getnome(), a.getcpf(), a.getemail(), a.gettelefone(),
				a.getdatadenascimento(), a.getsexo(), a.getsenha());

		return result;		
	}
	
	public int Editar(Cliente a, int idCliente) {
		String sql = "UPDATE CLIENTE SET NOME=?, CPF=?, EMAIL=?, TELEFONE=?, DATADENASCIMENTO=?, SEXO=?, SENHA=? WHERE ID =?";
		Object[] params = { a.getnome(), a.getcpf(), a.getemail(), a.gettelefone(), a.getdatadenascimento(),
				a.getsexo(), a.getsenha() };
		int result = jdbcTemplate.update(sql, params, idCliente);
		return result;
	}
	
	public int Deletar(int idCliente) {
		String sql = "DELETE FROM CLIENTE WHERE ID =?";
		Object[] params = { idCliente };
		int result = jdbcTemplate.update(sql, params, idCliente);
		return result;
	}
	
}
