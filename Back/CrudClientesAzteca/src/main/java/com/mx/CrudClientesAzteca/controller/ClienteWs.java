package com.mx.CrudClientesAzteca.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mx.CrudClientesAzteca.dominio.Cliente;
import com.mx.CrudClientesAzteca.servicio.ClienteServImp;
import com.mx.CrudClientesAzteca.servicio.Metodos;

@RestController
@RequestMapping("ClienteWs")
@CrossOrigin

public class ClienteWs {
	@Autowired
	Metodos metodos;
	
	@Autowired
	ClienteServImp clienteServImp;
	// http://localhost:9000/ClienteWs/listar
	//http://localhost:9000/ClienteWs/listar
	@GetMapping("listar")
	public List<Cliente> listar(){
		List<Cliente> lista = metodos.listar();
		
		return lista;
	}
	
	
	@GetMapping("lista")
	public List<Cliente> lista(){
		List<Cliente> listaC = clienteServImp.listar();
		
		return listaC;
	}
	
	// guardar
	// @RequestBody --> convierte el json en objto
	// http://localhost:9000/ClienteWs/guardar
	@PostMapping("guardar")
	public void guardar(@RequestBody Cliente cliente) {
		metodos.guardar(cliente);
	}
	
	// editar
	// http://localhost:9000/ClientesWs/editar
	@PostMapping("editar")
	public void editar(@RequestBody Cliente cliente) {
		metodos.editar(cliente);
	}
	
	// eliminar
	// http://localhost:9000/ClientesWs/eliminar
	@PostMapping("eliminar")
	public void eliminar(@RequestBody Cliente cliente) {
		metodos.eliminar(cliente);
	}
	
	//buscar
	// http://localhost:9000/ClienteWs/buscar
	@PostMapping("buscar")
	public Cliente buscar(@RequestBody Cliente cliente) {
		cliente = metodos.buscar(cliente);
		
		return cliente;
	}
	
	
}
