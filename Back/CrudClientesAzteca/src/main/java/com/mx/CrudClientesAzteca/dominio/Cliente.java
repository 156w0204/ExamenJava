package com.mx.CrudClientesAzteca.dominio;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/*CREATE TABLE CLIENTE(
ID NUMBER PRIMARY KEY,
NOMBRE VARCHAR(50),
FECHANAC DATE,
CELULAR NUMBER,
CORREO VARCHAR(50)
);*/

@Entity
@Table(name="CLIENTE")
public class Cliente {
	@Id
	@Column(name="ID", columnDefinition="NUMBER")
	int id;
	@Column(name="NOMBRE", columnDefinition="VARCHAR(50)")
	String nombre;
	@Column(name="FECHANAC", columnDefinition="DATE")
	Date fechanac;
	@Column(name="CELULAR", columnDefinition="NUMBER")
	long celular;
	@Column(name="CORREO", columnDefinition="VARCHAR(50)")
	String correo;
	
	
	public Cliente() {
		
	}


	public Cliente(int id) {
		this.id = id;
	}


	public Cliente(int id, String nombre, Date fechanac, long celular, String correo) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.fechanac = fechanac;
		this.celular = celular;
		this.correo = correo;
	}


	@Override
	public String toString() {
		return "Cliente [id=" + id + ", nombre=" + nombre + ", fechanac=" + fechanac + ", celular=" + celular
				+ ", correo=" + correo + "]\n";
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public Date getFechanac() {
		return fechanac;
	}


	public void setFechanac(Date fechanac) {
		this.fechanac = fechanac;
	}


	public long getCelular() {
		return celular;
	}


	public void setCelular(long celular) {
		this.celular = celular;
	}


	public String getCorreo() {
		return correo;
	}


	public void setCorreo(String correo) {
		this.correo = correo;
	}
	
	
	
	
	
	
	
	
	

}
