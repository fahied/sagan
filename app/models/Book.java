package models;

import javax.persistence.Entity;

import play.data.validation.Max;
import play.data.validation.Required;
import play.db.jpa.Model;
import play.mvc.*;

@Entity
public class Book extends Model {
	@Required
	public String title;
	public Integer pages;

	public Book(String title, Integer pages) {
		this.title = title;
		this.pages = pages;
	}
	
	@Override
	public String toString() {
		return this.title + " (" + this.pages + ")";
	}
}