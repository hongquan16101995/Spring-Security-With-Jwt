package cg.service.impl;

import cg.model.Role;
import cg.repository.IRoleRepository;
import cg.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService implements IRoleService {
    @Autowired
    private IRoleRepository iRoleRepository;

    @Override
    public Optional<Role> findByName(String name) {
        return iRoleRepository.findByName(name);
    }

    @Override
    public Iterable<Role> findAll() {
        return iRoleRepository.findAll();
    }

    @Override
    public Optional<Role> findById(Long id) {
        return iRoleRepository.findById(id);
    }

    @Override
    public void save(Role role) {
        iRoleRepository.save(role);
    }

    @Override
    public void delete(Long id) {
        iRoleRepository.deleteById(id);
    }
}
