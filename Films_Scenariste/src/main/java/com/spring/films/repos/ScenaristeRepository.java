package com.spring.films.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.spring.films.entities.Film;
import com.spring.films.entities.Scenariste;

public interface ScenaristeRepository extends JpaRepository<Scenariste, Long> {

	

	@Query("SELECT f FROM Scenariste f WHERE f.nom LIKE %?1%"  )
	public List<Scenariste> findAll(String keyword);

	@Query("SELECT f FROM Scenariste f WHERE f.scenariste LIKE %?1%")
	public List<Scenariste> findbyScenariste(String scenariste);

	/*
	 * /* @Query("SELECT f FROM Film f WHERE f.titre LIKE %?1%"
	 * +"Or f.sponsor Like %?1%") public Page<Film> findAllbypage(String keyword);
	 * public Page<Film> findAllbypage();
	 */
	List<Film> findByTitreContains(String titre);
	
	 /*@Query("select f from film f where f.scenariste = ?1") 
	public List<Film> findByScenariste (Scenariste scenariste);
	/* * List<Film>findByOrderByTitreFilmAsc(); Film saveFilm(Film f); Film
	 * updateFilm(Film f); void deleteFilm(Film f); void deleteFilmById(Long id);
	 * Film getFilm(Long id); List<Film> getAllFilms(); Page<Film>
	 * getAllFilmsParPage(int page, int size); List<Film> findByScenaristeIdSc(Long
	 * id); List<Film> findByOrderByTitreAsc(); //List<Film> trierTitreSponsor();
	 * 
	 */
}