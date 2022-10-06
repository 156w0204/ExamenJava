package com.mx.CrudClientesAzteca.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mx.CrudClientesAzteca.dao.ClienteDao;
import com.mx.CrudClientesAzteca.dominio.Cliente;
@Service
public class ClienteServImp implements Metodos{

	@Autowired
	ClienteDao clienteDao;
	
	@Override
	public void guardar(Cliente cliente) {
		// TODO Auto-generated method stub
		clienteDao.save(cliente);
	}

	@Override
	public void editar(Cliente cliente) {
		// TODO Auto-generated method stub
		clienteDao.save(cliente);
	}

	@Override
	public void eliminar(Cliente cliente) {
		// TODO Auto-generated method stub
		clienteDao.delete(cliente);
	}

	@Override
	public Cliente buscar(Cliente cliente) {
		// TODO Auto-generated method stub
		return clienteDao.findById(cliente.getId()).orElse(null);
	}

	@Override
	public List<Cliente> listar() {
		// TODO Auto-generated method stub
		return (List<Cliente>) clienteDao.findAll();
	}

}
