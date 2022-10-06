package com.mx.CrudClientesAzteca.servicio;

import java.util.List;

import com.mx.CrudClientesAzteca.dominio.Cliente;

public interface Metodos {

	public void guardar(Cliente cliente);
	public void editar(Cliente cliente);
	public void eliminar(Cliente cliente);
	
	public Cliente buscar(Cliente cliente);
	public List<Cliente> listar();
}
