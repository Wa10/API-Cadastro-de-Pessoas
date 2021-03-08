package com.softcadastro.softcadastro.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.NotEmpty;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PessoaDTO {

    private Long id;

    private String nome;

    @NotEmpty
    @CPF
    private String cpf;

    private String naturalidade;

    private String nacionalidade;

    private String dataNascimento;

    private String sexo;

    private String email;

    private Long dataCadastro;

}
