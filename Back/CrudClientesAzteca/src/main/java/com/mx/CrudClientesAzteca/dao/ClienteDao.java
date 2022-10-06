package com.mx.CrudClientesAzteca.dao;

import org.springframework.data.repository.CrudRepository;

import com.mx.CrudClientesAzteca.dominio.Cliente;

public interface ClienteDao extends CrudRepository<Cliente, Integer>{

}
