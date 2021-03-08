package com.softcadastro.softcadastro.controller;


import com.softcadastro.softcadastro.dto.PessoaDTO;
import com.softcadastro.softcadastro.dto.Response;
import com.softcadastro.softcadastro.exception.PessoaNotFoundException;
import com.softcadastro.softcadastro.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/app/pessoa")
public class PessoaController {

    private PessoaService pessoaService;

    @Autowired
    public PessoaController(PessoaService pessoaService){
        this.pessoaService = pessoaService;
    }

    @GetMapping("/{id}")
    public PessoaDTO findById(@PathVariable Long id) throws PessoaNotFoundException {
        return pessoaService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Response create(@RequestBody @Valid PessoaDTO pessoaDTO){
        return pessoaService.create(pessoaDTO);
    }

    @GetMapping
    public List<PessoaDTO> listAll(){
        return pessoaService.listAll();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) throws PessoaNotFoundException {
        pessoaService.delete(id);
    }

    @PutMapping("/{id}")
    public Response updateById(@PathVariable Long id, @RequestBody @Valid PessoaDTO pessoaDTO) throws PessoaNotFoundException {
        return pessoaService.updateById(id, pessoaDTO);
    }
}
