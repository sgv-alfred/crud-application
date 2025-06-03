-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2025 at 11:55 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `Name` varchar(256) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `Description` varchar(256) DEFAULT NULL,
  `Price` decimal(10,4) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0 COMMENT '0 - for review, 1 = approved, 2 = reject',
  `createdBy` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `Name`, `Quantity`, `Description`, `Price`, `status`, `createdBy`) VALUES
(1, 'testing product', 1, 'description', 1.0000, 1, 1),
(2, 'testing product 1', 1, 'description', 1.0000, 1, 1),
(3, 'testing product 2', 1, 'description', 1.0000, 2, 1),
(4, 'testing product 2', 1, 'description', 1.0000, 1, 1),
(5, 'testing product 2', 1, 'description', 1.0000, 1, 1),
(6, 'testing', 10, 'description', 1000.0000, 1, 25),
(7, 'testing', 100, 'description', 1000.0000, 1, 25),
(8, 'testing', 20, 'description', 1000.9100, 2, 25),
(9, 'test', 2, 'description', 100.0000, 1, 25),
(10, 'testing', 2, '3', 1.0000, 0, 25);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `productid` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `totalamt` decimal(10,4) NOT NULL,
  `dateCreated` date NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `userid`, `productid`, `quantity`, `totalamt`, `dateCreated`) VALUES
(1, 1, 1, 1, 1.0000, '2025-05-21'),
(2, 1, 1, 1, 1.0000, '2025-05-26'),
(3, 1, 1, 1, 1.0000, '2025-05-26'),
(4, 1, 1, 1, 1.0000, '2025-05-26'),
(5, 1, 1, 1, 1.0000, '2025-05-27');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `firstname`, `lastname`) VALUES
(1, 'alfredmaluya@gmail.com', 'sadfada', NULL, NULL),
(9, 'alfredma1luya@gmail.com', 'sadfada', 'hello', 'world'),
(14, 'alfredmaluya2@gmail.com', 'sadfada', 'hello', 'world'),
(16, 'alfredmaluya2@yahoo.com', 'sadfada', 'hello', 'test'),
(23, 'alfredmaluya3@yahoo.com', '$argon2id$v=19$m=65536,t=3,p=4$Kt7sAdV5HpdmUfrpZW01lA$1u/0JeUbJCQdg3tPYAipP6EMAozbqf5To5aTpQUOpXY', 'hello', '123'),
(25, 'alfredmaluya4@yahoo.com', '$argon2id$v=19$m=65536,t=3,p=4$5gujf2qWzh039i+eVXDVJA$Jvv31akF7G6i08N5mKuk1zmmqLTAUzuQxyPOFDwZOUM', 'hello', '123'),
(32, 'alfredmaluya4@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$+wGPB24eeyPWZjs7wp9hKA$MWmlVYyTXnTX4U0mahXh6z3XIaKGLHjyEnYBSmWI75A', 'alfredo', 'maluya'),
(33, 'alfredmaluya5@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$Chlu5bdUyrtAbpigR59ZjA$n/w4VGOblXl8yXGkmwTZfHMr9l6RGpeT/D6St9XpvdU', 'alfredo', 'maluya'),
(34, 'alfredmaluya5@yahoo.com', '$argon2id$v=19$m=65536,t=3,p=4$ztPaVpBZOmMdbXYKj+7xKQ$QQ0bZzNGPXHF8QyIfP3beBnt3yXwKx2wn7tbeazlkRs', 'Alfredo', 'Maluya'),
(35, 'alfredmaluya7@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$v7BeFAq97WqJVTTywRy3Nw$BPxiqE7ygUJxRa/jejccGDHov/2vUXR8Tii+mPm227A', 'alfredo', 'maluya');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`,`Description`),
  ADD KEY `fk_userid` (`createdBy`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_customerid` (`userid`),
  ADD KEY `fk_productid` (`productid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_userid` FOREIGN KEY (`createdBy`) REFERENCES `users` (`id`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `fk_customerid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `fk_productid` FOREIGN KEY (`productid`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
