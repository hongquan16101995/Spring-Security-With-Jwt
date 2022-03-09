package cg.service;

import cg.model.Role;

import java.util.Optional;

public interface IRoleService {
    Optional<Role> findByName(String name);

    Iterable<Role> findAll();

    Optional<Role> findById(Long id);

    void save(Role role);

    void delete(Long id);
}
