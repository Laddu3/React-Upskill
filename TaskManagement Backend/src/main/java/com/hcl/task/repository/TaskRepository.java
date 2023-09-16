package com.hcl.task.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.task.entity.Task;
@Repository
public interface TaskRepository extends JpaRepository<Task, Integer>{



}



