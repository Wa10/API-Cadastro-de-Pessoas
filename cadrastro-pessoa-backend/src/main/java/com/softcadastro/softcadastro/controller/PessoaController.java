package com.softcadastro.softcadastro.controller;


import com.softcadastro.softcadastro.dto.Response;
import com.softcadastro.softcadastro.entity.Pessoa;
import com.softcadastro.softcadastro.exception.PessoaNotFoundException;
import com.softcadastro.softcadastro.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/pessoas")
public class PessoaController {

    private PessoaService pessoaService;

    @Autowired
    public PessoaController(PessoaService pessoaService){
        this.pessoaService = pessoaService;
    }

    @GetMapping("/{id}")
    public Pessoa findById(@PathVariable Long id) throws PessoaNotFoundException {
        return pessoaService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Response create(@RequestBody @Valid Pessoa pessoa){
        return pessoaService.create(pessoa);
    }

    @GetMapping
    public List<Pessoa> listAll(){
        return pessoaService.listAll();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) throws PessoaNotFoundException {
        pessoaService.delete(id);
    }

    @PutMapping("/{id}")
    public void updateById(@PathVariable Long id, @RequestBody @Valid Pessoa pessoa) throws PessoaNotFoundException {
        pessoaService.updateById(id, pessoa);
    }
}
