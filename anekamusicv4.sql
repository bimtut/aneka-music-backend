-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2019 at 10:49 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `anekamusicv4`
--

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `id` int(11) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`id`, `location`) VALUES
(2, 'Jakarta'),
(3, 'Yogyakarta'),
(5, 'London');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `user` int(11) NOT NULL,
  `item` int(11) NOT NULL,
  `branch` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `image`) VALUES
(2, 'Guitar', 'https://d1aeri3ty3izns.cloudfront.net/media/40/403783/1200/preview.jpg'),
(3, 'Violin', 'https://d1aeri3ty3izns.cloudfront.net/media/19/197533/1200/preview_1.jpg'),
(4, 'Bass', 'https://d1aeri3ty3izns.cloudfront.net/media/45/455807/1200/preview.jpg'),
(5, 'Harp', 'https://d1aeri3ty3izns.cloudfront.net/media/39/397078/1200/preview.jpg'),
(7, 'Ukulele', 'https://d1aeri3ty3izns.cloudfront.net/media/14/146118/1200/preview.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `image` text NOT NULL,
  `description` text NOT NULL,
  `category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`id`, `name`, `image`, `description`, `category`) VALUES
(9, 'Gibson Hummingbird Studio, Antique Natural', 'https://d1aeri3ty3izns.cloudfront.net/media/46/468243/1200/preview.jpg', 'Limited edition and ready for the studio. The Gibson Hummingbird Studio 2019 combines elements from both the Hummingbird and Studio models to bring you a rich, premium Gibson tone with superb playability.\nOffering a blend of some of the best possible materials available and Gibson\'s iconic attention to detail. This Limited Edition Hummingbird Studio provides you with a richly-toned instrument that will only sound better with age.\nFurthermore, its advanced response neck profile adds comfort and accommodates faster-paced techniques perfectly. On-board LR Baggs electronics also allow for a natural and faithful amplified tone, making live performance simply stunning. ', 2),
(10, 'Lute Harp by Gear4music', 'https://d1aeri3ty3izns.cloudfront.net/media/30/305128/600/preview.jpg', 'The Gear4music 22 nylon string Lute Harp is a thinner and more portable version of harp that can sit comfortably on your lap. Featuring an intricate and carefully carved frame, this diatonic instrument produces a rich and authentic sounding tone. Included with the harp is a fabric gig bag, tuning lever and a spare set of strings.', 5),
(11, 'Takamine GB30CE Electro Acoustic Bass, Natural', 'https://d1aeri3ty3izns.cloudfront.net/media/43/434542/600/preview.jpg', 'The Takamine GB30CE Electro Acoustic Bass combines versatility with easy playability. The Solid Spruce top with Mahogany back and sides produces a classic blend of warmth and clarity. The slim design neck and 45mm fretboard is comfortable to play, whilst the Venetian cutaway allows easy access to the highest frets. The GB30CE comes equipped with a TK-4OB preamp, which benefits from three band EQ, a built in tuner and feedback control. This model is ideal for the bass player wanting a versatile and textured sound.', 4),
(12, 'Yamaha CGS103AII Classical Acoustic Guitar 3/4, Na', 'https://d1aeri3ty3izns.cloudfront.net/media/40/403783/1200/preview.jpg', 'Compact, comfortable, and affordable. The Yamaha CGS103AII Classical Acoustic is ready for the hands of a beginner or a younger player ready to strum their first chord. Its 3/4 scale offers a shorter length, making the guitar easy to play and perfect for learning, improving, and developing.\nA combination of spruce and meranti produce a warm, resonant and versatile tone, perfect for achieving numerous playing styles. The Yamaha\'s comfortable 3/4 scale length also offers easy playability for younger players and smaller hands.\n\nThis affordable Classical Acoustic from Yamaha is ideal for developing and improving your playing style. Part of a long lasting legacy, Yamaha continues to power many musical journeys - start yours today.', 2),
(15, 'Primavera 90 Violin Outfit, 1/2', 'https://d1aeri3ty3izns.cloudfront.net/media/4/44278/1200/preview_1.jpg', 'The Primavera 90 Violin Outfit, 1/2 is a complete package suitable for beginners and students. The Primavera 90 has been built to a high standard, using only quality spruce and maple for the body. Similar to professional violins, the Primavera 90 1/2 violin features rosewood fittings along with a lightweight carbon fibre tailpiece and ebonised fingerboard for a stylish and premium feel. The Primavera 90 1/2 violin outfit includes a hard foam case, bow, strings and rosin so you can start practising straight away.', 3),
(16, 'Primavera 100 Violin Outfit, 1/32', 'https://d1aeri3ty3izns.cloudfront.net/media/30/304696/1200/preview_2.jpg', 'The Primavera 100 Violin Outfit, 1/32 is a complete package suitable for beginners and students. Made from carefully selected hand-carved spruce and maple, the 100 violin not only looks appealing but creates a full and resonant sound. Featuring ebony fittings along with a carbon fibre tailpiece and ebonised fingerboard, the 100 violin is very hard wearing and easy to maintain. Included with the violin is a hard foam case with backpack straps, a durable hardwood bow, and rosin, so you can start practising straight away.', 3);

-- --------------------------------------------------------

--
-- Table structure for table `itemrequest`
--

CREATE TABLE `itemrequest` (
  `name` varchar(50) NOT NULL,
  `item` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `itemstock`
--

CREATE TABLE `itemstock` (
  `item` int(11) NOT NULL,
  `branch` int(11) NOT NULL,
  `price` bigint(20) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemstock`
--

INSERT INTO `itemstock` (`item`, `branch`, `price`, `quantity`) VALUES
(9, 2, 27500000, 5),
(9, 3, 23000000, 10),
(10, 2, 2750000, 10),
(10, 3, 2650000, 15),
(11, 2, 7800000, 20),
(12, 2, 1900000, 20),
(12, 3, 1800000, 15),
(15, 2, 1500000, 3),
(15, 3, 1450000, 7),
(16, 2, 1750000, 5);

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `id` int(11) NOT NULL,
  `level` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `level`
--

INSERT INTO `level` (`id`, `level`) VALUES
(1, 'admin'),
(2, 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `transactionitems`
--

CREATE TABLE `transactionitems` (
  `transaction` int(11) NOT NULL,
  `item` int(11) NOT NULL,
  `branch` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` bigint(20) NOT NULL,
  `itemName` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transactionitems`
--

INSERT INTO `transactionitems` (`transaction`, `item`, `branch`, `quantity`, `price`, `itemName`, `location`) VALUES
(19, 19, 2, 1, 23000, ' Ukulele by Gear4music', 'Jakarta');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `user`, `date`) VALUES
(19, 7, '2019-09-20');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `level`) VALUES
(7, 'Gerrit', 'gimindika@gmail.com', 'ad83bd3195258b3cce39ae190b8bb6888674b551f85c31d4fab01e883d3a59fe', 1),
(8, 'Gerrit Indika', 'im_gerrit@yahoo.co.id', 'ad83bd3195258b3cce39ae190b8bb6888674b551f85c31d4fab01e883d3a59fe', 1),
(9, 'Arfandy', 'fandy@yahoo.co.id', 'ad83bd3195258b3cce39ae190b8bb6888674b551f85c31d4fab01e883d3a59fe', 2),
(10, 'Firman', 'rozy@gmail.com', 'ad83bd3195258b3cce39ae190b8bb6888674b551f85c31d4fab01e883d3a59fe', 2),
(14, 'anton', 'anton@gmail.com', 'ad83bd3195258b3cce39ae190b8bb6888674b551f85c31d4fab01e883d3a59fe', 2),
(15, 'nobita', 'doraemon@gmail.com', 'ad83bd3195258b3cce39ae190b8bb6888674b551f85c31d4fab01e883d3a59fe', 2),
(16, 'fachmi', 'fachmi@gmail.com', 'ad83bd3195258b3cce39ae190b8bb6888674b551f85c31d4fab01e883d3a59fe', 2);

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `user` int(11) NOT NULL,
  `item` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`user`, `item`) VALUES
(7, 10),
(7, 9),
(9, 9),
(16, 16);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD KEY `user` (`user`),
  ADD KEY `item` (`item`),
  ADD KEY `branch` (`branch`),
  ADD KEY `user_2` (`user`),
  ADD KEY `item_2` (`item`),
  ADD KEY `branch_2` (`branch`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`);

--
-- Indexes for table `itemstock`
--
ALTER TABLE `itemstock`
  ADD KEY `branch` (`branch`),
  ADD KEY `item` (`item`);

--
-- Indexes for table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactionitems`
--
ALTER TABLE `transactionitems`
  ADD KEY `transaction` (`transaction`),
  ADD KEY `item` (`item`),
  ADD KEY `branch` (`branch`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `level` (`level`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD KEY `user` (`user`),
  ADD KEY `item` (`item`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `branch`
--
ALTER TABLE `branch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`item`) REFERENCES `itemstock` (`item`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_3` FOREIGN KEY (`branch`) REFERENCES `itemstock` (`branch`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`category`) REFERENCES `category` (`id`);

--
-- Constraints for table `itemstock`
--
ALTER TABLE `itemstock`
  ADD CONSTRAINT `itemstock_ibfk_1` FOREIGN KEY (`branch`) REFERENCES `branch` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `itemstock_ibfk_2` FOREIGN KEY (`item`) REFERENCES `item` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `transactionitems`
--
ALTER TABLE `transactionitems`
  ADD CONSTRAINT `transactionitems_ibfk_4` FOREIGN KEY (`transaction`) REFERENCES `transactions` (`id`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`level`) REFERENCES `level` (`id`);

--
-- Constraints for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`item`) REFERENCES `item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
