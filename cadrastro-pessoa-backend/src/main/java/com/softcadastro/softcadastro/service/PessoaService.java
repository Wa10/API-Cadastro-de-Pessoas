package com.softcadastro.softcadastro.service;


import com.softcadastro.softcadastro.dto.PessoaDTO;
import com.softcadastro.softcadastro.dto.Response;
import com.softcadastro.softcadastro.entity.Pessoa;
import com.softcadastro.softcadastro.exception.PessoaNotFoundException;
import com.softcadastro.softcadastro.mapper.PessoaMapper;
import com.softcadastro.softcadastro.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PessoaService {

    private PessoaRepository pessoaRepository;

    private final PessoaMapper pessoaMapper = PessoaMapper.INSTANCE;

    @Autowired
    public PessoaService(PessoaRepository pessoaRepository){
        this.pessoaRepository = pessoaRepository;
    }

    public Response create(PessoaDTO pessoaDTO){
        Pessoa pessoaToCreate = pessoaMapper.toModel(pessoaDTO);
        Pessoa savePessoa = pessoaRepository.save(pessoaToCreate);
        return criarMessageResponse(savePessoa.getId(), "Pessoa criada com o ID ");
    }

    public List<PessoaDTO> listAll() {
        List<Pessoa> allPessoas = pessoaRepository.findAll();

        return allPessoas.stream()
                .map(pessoaMapper::toDTO)
                .collect(Collectors.toList());
    }

    public PessoaDTO findById(Long id) throws PessoaNotFoundException {
        Pessoa pessoa = pessoaRepository.findById(id)
                .orElseThrow(() -> new PessoaNotFoundException(id));

        return pessoaMapper.toDTO(pessoa);
    }

    public void delete(Long id) throws PessoaNotFoundException {
        verifyIfExist(id);
        pessoaRepository.deleteById(id);
    }

    public Response updateById(Long id, PessoaDTO pessoaDTO) throws PessoaNotFoundException {
        verifyIfExist(id);
        Pessoa updatePessoa = pessoaMapper.toModel(pessoaDTO);
        Pessoa savePessoa = pessoaRepository.save(updatePessoa);
        return criarMessageResponse(savePessoa.getId(), "Pessoa atualizada com o ID ");
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

}
