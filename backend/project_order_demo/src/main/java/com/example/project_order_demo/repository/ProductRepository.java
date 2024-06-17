package org.example.demopoc.repository;

import jakarta.persistence.criteria.CriteriaBuilder;
import org.example.demopoc.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Products,Integer> {
}
