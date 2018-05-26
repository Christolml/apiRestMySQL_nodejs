CREATE DATABASE testapimysql;

USE testapimysql;

CREATE TABLE IF NOT EXISTS `users` (
    `id` INT(10) unsigned NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
    `email` VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
    `password` VARCHAR(200) COLLATE utf8_unicode_ci NOT NULL,
    `created_at`
    `update_at`
)