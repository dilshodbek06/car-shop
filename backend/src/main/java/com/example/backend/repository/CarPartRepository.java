package com.example.backend.repository;

import com.example.backend.entity.CarPart;
import com.example.backend.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface CarPartRepository extends JpaRepository<CarPart, UUID> {
    Page<CarPart> findByNameContainingIgnoreCase(String name, Pageable pageable);

    @Query(value = "SELECT * FROM car_part p ORDER BY p.top_part ASC LIMIT :count", nativeQuery = true)
    List<CarPart> findTopCarPart(Integer count);
}