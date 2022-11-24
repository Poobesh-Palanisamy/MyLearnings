package com.springboot;

public class Course {

	private int Id;
	private String name;
	private String author;
	
	
	
	public Course(int id, String name, String author) {
		super();
		this.Id = id;
		this.name = name;
		this.author = author;
	}


	public int getId() {
		return Id;
	}


	public String getName() {
		return name;
	}


	public String getAuthor() {
		return author;
	}


	@Override
	public String toString() {
		return "Course [Id=" + Id + ", name=" + name + ", Author=" + author + "]";
	}
	
}
