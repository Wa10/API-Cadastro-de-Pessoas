package com.softcadastro.softcadastro;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.softcadastro.softcadastro.controller.PessoaController;
import com.softcadastro.softcadastro.dto.PessoaDTO;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

public class pessoaControllerTest extends SoftcadastroApplicationTests {

    private MockMvc mocMvc;

    @Autowired
    private PessoaController pessoaController;

    @Before()
    public void setUp(){
        this.mocMvc = MockMvcBuilders.standaloneSetup(pessoaController).build();
    }

    @Test
    public void criarPessoaComDadosCorretos() throws Exception {
        PessoaDTO pessoa = new PessoaDTO(2l, "joao", "51096304023", "Dois Vizinhos", "Brasil", "01-01-2000", "M", "teste@teste.com", 1500l);
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(pessoa);

        this.mocMvc.perform(MockMvcRequestBuilders.post("/app/pessoa")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(MockMvcResultMatchers.status().isCreated());
    }

}
