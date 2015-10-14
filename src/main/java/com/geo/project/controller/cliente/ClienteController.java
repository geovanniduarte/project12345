package com.geo.project.controller.cliente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.geo.project.common.MyController;
import com.geo.project.common.model.InvCliente;
import com.geo.project.repository.cliente.ClienteRepository;

@Controller
@RequestMapping("/ws/clientes")
public class ClienteController extends MyController {
	
	@Autowired
	private ClienteRepository clienteRepository;	
	
	@RequestMapping(value = "/create", method = RequestMethod.POST, consumes = {"application/json"})
	@ResponseBody
	public String insert(@RequestBody InvCliente cliente) {
		System.out.println("CREATE"); 
		long clientid = clienteRepository.insert(cliente);
		return "" + clientid;
	}	
	
	@RequestMapping(value = "/get", method = RequestMethod.GET)
	@ResponseBody
	public InvCliente insert() {
		InvCliente cliente = new InvCliente();
		cliente.setClieacti(2);
		cliente.setClieciud(2);
		cliente.setCliedire("Direccion 2");
		return cliente;
	}
	
}
