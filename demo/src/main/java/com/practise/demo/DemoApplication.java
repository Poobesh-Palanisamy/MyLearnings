package com.practise.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext Context = SpringApplication.run(DemoApplication.class, args);
	
	Home h = Context.getBean(Home.class);
	h.connect();
	
	Home h2 = Context.getBean(Home.class);
	h2.connect();
	}

}
