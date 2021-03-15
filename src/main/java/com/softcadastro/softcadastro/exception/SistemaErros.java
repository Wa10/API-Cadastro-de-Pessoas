package com.softcadastro.softcadastro.exception;

import lombok.Builder;
import lombok.Data;

import java.util.Arrays;
import java.util.List;


@Data
@Builder
public class SistemaErros   {

    private List<String> erros;

    public SistemaErros(List<String> erros){
        this.erros = erros;
    }

    public SistemaErros(String message){
        this.erros = Arrays.asList(message);
    }

}
