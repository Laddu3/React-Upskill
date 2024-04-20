package com.hcl.task.service;

import java.util.List;

import com.hcl.task.entity.Task;

public interface TaskService {
	
	public Task savetask(Task task);
	public List<Task> Displayalltasks();
	 public void Update(Task task);
	public void deleteTask(Integer id);
	
	
}
