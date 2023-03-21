package br.senai.sp.livro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
<<<<<<< HEAD
public class LivroApplication implements WebMvcConfigurer{
=======
public class LivroApplication implements WebMvcConfigurer {
>>>>>>> 831c9cf2980c4ea051fa0ccb6edcd696a8e615d8
	
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedOrigins("http://localhost:3000").allowedMethods("GET", "POST", "DELETE", "OPTIONS", "PUT");
	}

	public static void main(String[] args) {
		SpringApplication.run(LivroApplication.class, args);
	}
}
