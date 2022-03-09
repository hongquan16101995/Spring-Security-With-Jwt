package cg.service;

import cg.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface IUserService extends UserDetailsService {
    Optional<User> findByUsername(String username);

    Iterable<User> findAll();

    Optional<User> findById(Long id);

    void save(User user);

    void delete(Long id);
}
