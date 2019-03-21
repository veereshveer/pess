-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2018 at 07:33 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pes`
--

-- --------------------------------------------------------

--
-- Table structure for table `adm_reg`
--

CREATE TABLE `adm_reg` (
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ext_details`
--

CREATE TABLE `ext_details` (
  `name` varchar(30) NOT NULL,
  `college_name` varchar(30) NOT NULL,
  `dept` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `group_assigned` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ext_details`
--

INSERT INTO `ext_details` (`name`, `college_name`, `dept`, `email`, `group_assigned`) VALUES
('anil', 'dr ait', 'MCA', 'a@gmail.com', 'A'),
('veeresh', 'dr AIT', 'MCA', 'veereshr87@gmail.com', 'B');

-- --------------------------------------------------------

--
-- Table structure for table `ext_reg`
--

CREATE TABLE `ext_reg` (
  `email` varchar(50) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ext_reg`
--

INSERT INTO `ext_reg` (`email`, `username`, `password`) VALUES
('a@gmail.com', 'anil', '12345678'),
('veereshr87@gmail.com', 'veeresh R', 'qwertyu1234');

-- --------------------------------------------------------

--
-- Table structure for table `int_details`
--

CREATE TABLE `int_details` (
  `name` varchar(30) NOT NULL,
  `department` varchar(30) NOT NULL,
  `branch` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `int_details`
--

INSERT INTO `int_details` (`name`, `department`, `branch`, `email`) VALUES
('anil', 'MCA', 'mca', 'anil@gmail.com'),
('Sachin', 'Engineering', 'CS', 'sachinjvit@gmail.com'),
('veeresh', 'MCA', 'MCA', 'veereshr87@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `int_reg`
--

CREATE TABLE `int_reg` (
  `email` varchar(50) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `int_reg`
--

INSERT INTO `int_reg` (`email`, `username`, `password`) VALUES
('anil@gmail.com', 'anil', 'anil63159'),
('arunkumar7676@gmail.com', 'arun', '12345678'),
('shobarani@gmail.com', 'ShobaRani', '123456789'),
('veereshr87@gmail.com', 'veeresh R', 'qwerty123');

-- --------------------------------------------------------

--
-- Table structure for table `std_details`
--

CREATE TABLE `std_details` (
  `guide` varchar(30) NOT NULL,
  `group_name` varchar(30) NOT NULL,
  `usn` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `dept` varchar(30) NOT NULL,
  `course` varchar(30) NOT NULL,
  `year` int(15) NOT NULL,
  `course_period` varchar(30) NOT NULL,
  `contact` int(15) NOT NULL,
  `address` varchar(60) NOT NULL,
  `project_title` varchar(100) NOT NULL,
  `project_document` varchar(20000) NOT NULL,
  `internal_marks` int(10) NOT NULL,
  `external_marks` int(10) NOT NULL,
  `average_marks` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `std_details`
--

INSERT INTO `std_details` (`guide`, `group_name`, `usn`, `name`, `dept`, `course`, `year`, `course_period`, `contact`, `address`, `project_title`, `project_document`, `internal_marks`, `external_marks`, `average_marks`) VALUES
('VEERESH R', 'B', '1DA17MCA71', 'ANIL B K', 'MCA', 'MCA', 2017, '4', 2147483647, 'HELL', 'UNKNOWN', '../Project_doc/4 sem.rar', 99, 0, 0),
('ShobaRani', '', '1DZ17MCA82', 'Veeresh', 'MCA', 'MCA', 2017, '4', 2147483647, 'EARTH', 'PES', '../Project_doc/17661.zip', 100, 20, 0),
('s', '', 'lllllllllllll', 'k', 'MBA', 'MBA', 154, '3', 2147483647, 'llll', 'kk', '../Project_doc/travel.sql', 0, 10, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ext_details`
--
ALTER TABLE `ext_details`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `ext_reg`
--
ALTER TABLE `ext_reg`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `int_details`
--
ALTER TABLE `int_details`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `int_reg`
--
ALTER TABLE `int_reg`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `std_details`
--
ALTER TABLE `std_details`
  ADD PRIMARY KEY (`usn`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
