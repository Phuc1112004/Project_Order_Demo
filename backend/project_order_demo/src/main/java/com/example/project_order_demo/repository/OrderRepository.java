package org.example.demopoc.repository;

import org.example.demopoc.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrderRepository extends JpaRepository<Orders, Integer> {
}
