package com.springboot;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseController {

	@RequestMapping("/course")
	public List<Course> retrieveAllCourses(){
		return Arrays.asList(
				
				new Course(1, "C++", "Poobesh"),
				new Course(1, "Python", "Harish"),
				new Course(1, "Mongo", "Logith"),
				new Course(1, "SQL", "Riya")
				
				);
		
	}
	
}
