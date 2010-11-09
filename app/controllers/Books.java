package controllers;

import java.util.*;

import play.Logger;
import play.mvc.*;
import models.Book;

public class Books extends Controller {

	public static void read(String id) {

		// List<Book> books = new ArrayList<Book>();
		// books.add(new Book("A sangre frio", 123));
		// books.add(new Book("100 anos de solidao", 345));
		// books.add(new Book("El mejor de JS", 888));
		// books.add(new Book("Francisco", 190));

		if (id == null) {
			List<Book> books = Book.findAll();
			renderJSON(books);
		} else {
			Book book = Book.findById(id);
			renderJSON(book);
		}

	}

	public static void update(String id) {
		Logger.info("Object received: %s", params.get("body"));
		System.out.println("update: " + id);
		renderJSON("{}");
	}

	public static void create(String id) {
		Logger.info("Object received: %s", params.get("body"));
		System.out.println("save: " + id);
		renderJSON("{}");
	}

	public static void destroy(Long id) {
		Logger.info("Object received: %s", params.get("body"));
		Book.delete("id", id);
		renderJSON("{}");
	}

}