DROP DATABASE IF EXISTS sneakers;

CREATE DATABASE sneakers;

USE sneakers;
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(25) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'sneakers'
--
-- ---

DROP TABLE IF EXISTS `favorites`;

CREATE TABLE `favorites` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(75) NULL DEFAULT NULL,
  `url` VARCHAR(75) NULL DEFAULT NULL,
  `media` VARCHAR(300) NULL DEFAULT NULL,
  `highestbid` MEDIUMTEXT NULL DEFAULT NULL,
  `lastsale` MEDIUMTEXT NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `favorites` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `sneakers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`username`) VALUES
-- ('','');
-- INSERT INTO `sneakers` (`id`,`name`,`size`,`highestbid`,`user_id`) VALUES
-- ('','','','','');