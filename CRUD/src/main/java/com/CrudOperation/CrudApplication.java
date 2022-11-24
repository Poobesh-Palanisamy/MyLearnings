package com.CrudOperation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudApplication.class, args);
	}

}



//ConfigurableApplicationContext applictaionContext = SpringApplication.run(CrudApplication);
//SpringComponent component = applictaionContext.getBean(SpringComponent.class);
//SpringApplication.run(CrudApplication.class, args);