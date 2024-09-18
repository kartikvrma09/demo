package com.kartik.mhs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.kartik.mhs.model.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    com.kartik.mhs.model.User findByUsername(String username);
}