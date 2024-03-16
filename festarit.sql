-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 16, 2024 at 10:12 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `festarit`
--
CREATE DATABASE IF NOT EXISTS `festarit` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `festarit`;

-- --------------------------------------------------------

--
-- Table structure for table `artistit`
--

CREATE TABLE `artistit` (
  `Nimi` varchar(255) DEFAULT NULL,
  `Maa` varchar(255) DEFAULT NULL,
  `Kuvaus` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `artistit`
--

INSERT INTO `artistit` (`Nimi`, `Maa`, `Kuvaus`) VALUES
('Amorphis', 'FI', 'Suomalainen metalliyhtye, jonka musiikissa on lähes kaikilla albumeilla vaikutteita suomalaisesta mytologiasta.'),
('Beast in Black', 'FI', 'Suomessa vuonna 2015 perustettu heavy metal -yhtye.'),
('Blind Channel', 'FI', 'Oulussa vuonna 2013 perustettu kuusihenkinen violent pop-yhtye.'),
('Carcass', 'UK', 'Brittiläinen death metal/grindcore -yhtye, jonka perustivat kitaristi Bill Steer (Napalm Death) ja rumpali Ken Owen.'),
('Diablo', 'FI', 'Diablo on vuonna 1995 perustettu suomalainen metalliyhtye.'),
('Hammerfall', 'SE', 'Vuonna 1993 perustettu ruotsalainen metalliyhtye. Yhtyeen johtohahmo ja perustajajäsen on kitaristi Oscar Dronjak.'),
('Iron Maiden', 'UK', 'Brittiläinen metallimusiikkia esittävä yhtye, jonka basisti Steve Harris perusti Lontoossa vuonna 1975.'),
('Louie Blue', 'FI', 'Alec Moborg aka Louie Blue on vuonna 2002 syntynyt musiikintekijä Turusta.'),
('Major Lazer', 'US', 'Yhdysvaltalainen elektronisen musiikin yhtye, jonka perustivat tuottajat Diplo ja Switch vuonna 2008.'),
('Mokoma', 'FI', 'Lappeenrannasta lähtöisin oleva suomenkielistä metallia esittävä yhtye.'),
('Moon Shot', 'FI', 'Perustettu vuonna 2020. Jäseninä Ville Malja (Lapko), Jussi Ylikoski ja Mikko Hakila (Disco Ensemble) sekä Henkka Seppälä (Children of Bodom).'),
('Nightwish', 'FI', 'Suomalainen, Kiteeltä kotoisin oleva vuonna 1996 perustettu sinfonista metallia esittävä yhtye.'),
('Scorpions', 'DE', 'Saksalainen hard rock -yhtye, joka perustettiin Hannoverissa vuonna 1965.'),
('Sepultura', 'BR', 'Brasilialainen groove metal/thrash metal -yhtye.');

-- --------------------------------------------------------

--
-- Table structure for table `festivaalit`
--

CREATE TABLE `festivaalit` (
  `Nimi` varchar(255) DEFAULT NULL,
  `Aika` date DEFAULT NULL,
  `Paikka` varchar(255) DEFAULT NULL,
  `Artistit` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `festivaalit`
--

INSERT INTO `festivaalit` (`Nimi`, `Aika`, `Paikka`, `Artistit`) VALUES
('Ilosaarirock', '2022-07-15', 'Joensuu', 'Nightwish, Blind Channel, Beast in Black, Moon Shot'),
('Knotfest', '2022-12-08', 'Turku', 'Nightwish, Blind Channel, Moon Shot'),
('Nummirock', '2022-06-22', 'Nummijärvi', 'Diablo, Hammerfall, Sepultura'),
('Rockfest', '2022-06-02', 'Hyvinkää', 'Iron Maiden, Scorpions, Nightwish, Diablo, Mokoma, Blind Channel'),
('Ruisrock', '2022-07-08', 'Turku', 'Major Lazer, Blind Channel, Louie Blue'),
('Tuska', '2022-07-01', 'Helsinki', 'Carcass, Beast in Black, Mokoma, Amorphis, Iron Maiden');

-- --------------------------------------------------------

--
-- Table structure for table `kaupungit`
--

CREATE TABLE `kaupungit` (
  `Nimi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kaupungit`
--

INSERT INTO `kaupungit` (`Nimi`) VALUES
('Hyvinkää'),
('Nummijärvi'),
('Helsinki'),
('Turku'),
('Joensuu');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
