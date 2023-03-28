package br.senai.sp.livro.model;

public class Cliente {
	
		private Long idCliente;
	    private String nome; 
	    private String cpf;
	    private String email; 
	    private String telefone; 
	    private String dataNascimento; 
	    private String sexo; 
	    private String senha;
	    
	    
		public Long getIdUsuario() {
			return idCliente;
		}
		public void setIdUsuario(Long idUsuario) {
			this.idCliente = idUsuario;
		}
		public String getNome() {
			return nome;
		}
		public void setNome(String nome) {
			this.nome = nome;
		}
		public String getCpf() {
			return cpf;
		}
		public void setCpf(String cpf) {
			this.cpf = cpf;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getTelefone() {
			return telefone;
		}
		public void setTelefone(String telefone) {
			this.telefone = telefone;
		}
		public String getDataNascimento() {
			return dataNascimento;
		}
		public void setDataNascimento(String dataNascimento) {
			this.dataNascimento = dataNascimento;
		}
		public String getSexo() {
			return sexo;
		}
		public void setSexo(String sexo) {
			this.sexo = sexo;
		}
		public String getSenha() {
			return senha;
		}
		public void setSenha(String senha) {
			this.senha = senha;
		} 
	    
	    
	    
}
