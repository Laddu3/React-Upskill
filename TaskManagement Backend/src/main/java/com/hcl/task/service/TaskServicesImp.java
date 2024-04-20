package com.hcl.task.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.task.entity.Task;
import com.hcl.task.repository.TaskRepository;

@Service 
public class TaskServicesImp implements TaskService {
	

		@Autowired  //used to inject the object dependency implicitly
		TaskRepository taskRepository;
		//to add the vehicle data into database 
		// CRUD operations on creating,deleting,displaying,updating user

		public Task savetask(Task task) {

			return taskRepository.save(task);// saving the user

		}

		public List<Task> Displayalltasks() {

			return taskRepository.findAll();// displays all users
		}


		 public void Update(Task task) {
		      taskRepository.save(task);
		   }
		 
		public void deleteTask(Integer id) {
			taskRepository.deleteById(id);
			
		}
}





