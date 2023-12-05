-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2023 at 03:32 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `massive`
--

-- --------------------------------------------------------

--
-- Table structure for table `veterinarians`
--

CREATE TABLE `veterinarians` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `strv` varchar(255) NOT NULL,
  `specialist` varchar(255) NOT NULL,
  `star` int(11) NOT NULL,
  `exp` varchar(50) NOT NULL,
  `price` varchar(20) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `veterinarians`
--

INSERT INTO `veterinarians` (`id`, `name`, `img`, `strv`, `specialist`, `star`, `exp`, `price`, `location`) VALUES
(1, 'drh. New Veterinarian', 'https://example.com/new-vet.jpg', '2.06.010411.04.2021.04', 'Anjing', 4, '2 Tahun', '60.000', 'Surabaya, Jawa Timur'),
(2, 'drh. Alexandra', 'https://i.pinimg.com/564x/2a/12/5c/2a125c7aa0d47538b857291fa0901286.jpg', '2.06.010411.04.2021.04', 'Kucing', 5, '3 Tahun', '50.000  ', 'Kediri, Jawa Timur'),
(3, 'drh. Alexandra', 'https://i.pinimg.com/564x/2a/12/5c/2a125c7aa0d47538b857291fa0901286.jpg', '2.06.010411.04.2021.04', 'Kucing', 5, '3 Tahun', '50.000  ', 'Kediri, Jawa Timur'),
(4, 'drh. Susanto', 'https://i.pinimg.com/564x/cc/57/c3/cc57c37ed983966367bae5ace00496f2.jpg', '2.06.010411.04.2021.05', 'Kucing, Anjing', 5, '3 Tahun', '50.000  ', 'Bandung, Jawa Barat'),
(5, 'drh. Ida Sukma', 'https://i.pinimg.com/564x/3b/0f/f9/3b0ff996e7f59d1f30eac77e4ce3ea21.jpg', '2.06.010411.04.2021.06', 'Anjing', 5, '3 Tahun', '50.000  ', 'Sukabumi, Jawa Barat'),
(6, 'drh. Yanto Kusinai', 'https://i.pinimg.com/564x/eb/e6/f4/ebe6f490ccff1daa0a3dc7d9dbbb92d3.jpg', '2.06.010411.04.2021.07', 'Kucing, Anjing', 5, '3 Tahun', '50.000  ', 'Magelang, Jawa Tengah'),
(7, 'drh. Amalia Yura', 'https://i.pinimg.com/564x/3b/0f/f9/3b0ff996e7f59d1f30eac77e4ce3ea21.jpg', '2.06.010411.04.2021.08', 'Anjing', 5, '3 Tahun', '50.000  ', 'Madiun, Jawa Timur'),
(8, 'drh. Rizal', 'ihttps://i.pinimg.com/736x/5c/ad/d6/5cadd63cefb6f7757efe9266d345cea6.jpg', '2.06.010411.04.2021.09', 'Kucing, Anjing', 5, '3 Tahun', '50.000  ', 'Jambi, Jambi'),
(9, 'drh. Anggi Septiana', 'https://i.pinimg.com/736x/5c/ad/d6/5cadd63cefb6f7757efe9266d345cea6.jpg', '2.06.010411.04.2021.10', 'Kucing', 5, '3 Tahun', '50.000  ', 'Pontianak, Kalimantan Barat'),
(10, 'drh. Faizi', 'https://i.pinimg.com/564x/bb/74/ba/bb74bae0879782206e5970e65efcfaa6.jpg', '2.06.010411.04.2021.11', 'Anjing', 5, '3 Tahun', '50.000  ', 'Batam, Kepulauan Riau'),
(11, 'drh.Wahyuni', 'https://i.pinimg.com/564x/76/8f/f2/768ff2a51d201c8925d23a413901d630.jpg', '2.06.010411.04.2021.12', 'Kucing, Anjing', 5, '3 Tahun', '50.000  ', 'Padang, Sumatera Barat'),
(12, 'drh. Reza Kurniawan', 'https://i.pinimg.com/564x/0f/67/42/0f6742dba7aa0232a583b21bbcbe1486.jpg', '2.06.010411.04.2021.13', 'Anjing', 5, '3 Tahun', '50.000  ', 'Tangerang Selatan, Banten'),
(13, 'drh. Putri Salsadilla', 'https://i.pinimg.com/564x/16/2b/90/162b90a6d4409741b812d67edb66171c.jpg', '2.06.010411.04.2021.14', 'Kucing', 5, '3 Tahun', '50.000  ', 'Jakarta Selatan, Jakarta'),
(14, 'drh. Sandi Alexander', 'https://i.pinimg.com/564x/38/62/d4/3862d4aade40a268300175392fe81581.jpg', '2.06.010411.04.2021.15', 'Kucing, Anjing', 5, '3 Tahun', '50.000  ', 'Bogor, Jawa Barat'),
(15, 'drh. Mutia Yerussalem', 'https://i.pinimg.com/736x/5a/5e/70/5a5e700f42b56ee2ecea2a8119d0ed5a.jpg', '2.06.010411.04.2021.16', 'Kucing, Anjing', 5, '3 Tahun', '50.000  ', 'Semarang, Jawa Tengah'),
(16, 'drh. Bambang', 'https://i.pinimg.com/564x/96/9f/93/969f93cde7a93cebc4f3a9c80abaab2c.jpg', '2.06.010411.04.2021.17', 'Anjing', 5, '3 Tahun', '50.000  ', 'Banjarmasin, Kalimantan Selatan'),
(17, 'drh. Syifa Nur Aini', 'https://i.pinimg.com/564x/16/ab/ed/16abed0c42c0b19067c96ad826e71945.jpg', '2.06.010411.04.2021.18', 'Kucing', 5, '3 Tahun', '50.000  ', 'Kupang, Nusa Tenggara Timur'),
(18, 'drh. Firman Syahputra', 'https://i.pinimg.com/564x/0e/77/4c/0e774c86bfba148e31bef1877aaa1c59.jpg', '2.06.010411.04.2021.19', 'Kucing, Anjing', 5, '3 Tahun', '50.000  ', 'Pekanbaru, Riau'),
(19, 'drh. Hanna', 'https://i.pinimg.com/564x/9d/32/ec/9d32ec35ffeb5fbe79df2593e90afb83.jpg', '2.06.010411.04.2021.20', 'Kucing', 5, '3 Tahun', '50.000  ', 'Palu, Sulawesi Tengah'),
(20, 'drh. Naufal', 'https://i.pinimg.com/564x/93/d7/ff/93d7ff957d8d4dcfb2f684953989a202.jpg', '2.06.010411.04.2021.21', 'Kucing', 5, '3 Tahun', '50.000  ', 'Palembang, Sumatera Selatan'),
(21, 'drh. Flora ', 'https://i.pinimg.com/564x/05/87/30/058730446f37bf6cd41032d368110de1.jpg', '2.06.010411.04.2021.22', 'Anjing', 5, '3 Tahun', '50.000  ', 'Samarinda, Kalimantan Timur');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `veterinarians`
--
ALTER TABLE `veterinarians`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `veterinarians`
--
ALTER TABLE `veterinarians`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
