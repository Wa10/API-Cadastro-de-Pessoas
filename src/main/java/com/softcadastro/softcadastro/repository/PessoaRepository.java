package com.softcadastro.softcadastro.repository;

import com.softcadastro.softcadastro.entity.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
}
