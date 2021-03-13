package com.softcadastro.softcadastro.service;


import com.softcadastro.softcadastro.dto.Response;
import com.softcadastro.softcadastro.entity.Pessoa;
import com.softcadastro.softcadastro.exception.PessoaNotFoundException;
import com.softcadastro.softcadastro.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class PessoaService {

    private PessoaRepository pessoaRepository;

    @Autowired
    public PessoaService(PessoaRepository pessoaRepository){
        this.pessoaRepository = pessoaRepository;
    }

    public Response create(Pessoa pessoa){
        setarDataCadastros(pessoa);
        Pessoa savePessoa = pessoaRepository.save(pessoa);
        return criarMessageResponse(savePessoa.getId(), "Pessoa criada com o ID ");
    }

    public List<Pessoa> listAll() {
        List<Pessoa> allPessoas = pessoaRepository.findAll();

        return allPessoas;
    }

    public Pessoa findById(Long id) throws PessoaNotFoundException {
        Pessoa pessoa = pessoaRepository.findById(id)
                .orElseThrow(() -> new PessoaNotFoundException(id));

        return pessoa;
    }

    public void delete(Long id) throws PessoaNotFoundException {
        verifyIfExist(id);
        pessoaRepository.deleteById(id);
    }

    public void updateById(Long id, Pessoa pessoaParaAtualizar) throws PessoaNotFoundException {
        verifyIfExist(id);
        setarDataCadastros(pessoaParaAtualizar);
        pessoaRepository.findById(id).
                map(pessoa -> {
                    pessoa.setNome(pessoaParaAtualizar.getNome());
                    pessoa.setCpf(pessoaParaAtualizar.getCpf());
                    pessoa.setEmail(pessoaParaAtualizar.getEmail());
                    pessoa.setSexo(pessoaParaAtualizar.getSexo());
                    pessoa.setNacionalidade(pessoaParaAtualizar.getNacionalidade());
                    pessoa.setNaturalidade(pessoaParaAtualizar.getNaturalidade());
                    pessoa.setDataNascimento(pessoaParaAtualizar.getDataNascimento());
                    return pessoaRepository.save(pessoa);
                });

    }

    private Pessoa verifyIfExist(Long id) throws PessoaNotFoundException {
        return pessoaRepository.findById(id)
                .orElseThrow(() -> new PessoaNotFoundException(id));
    }

    private Response criarMessageResponse(Long id, String message) {
        return Response
                .builder()
                .message(message + id)
                .build();
    }

    private void setarDataCadastros(Pessoa pessoa){
        pessoa.setDataAtualizacao(LocalDate.now());
        if(pessoa.getId() == null) {
            pessoa.setDataCadastro(LocalDate.now());
        }
    }

}
