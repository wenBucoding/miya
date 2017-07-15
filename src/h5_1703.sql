/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1703

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-14 17:17:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) NOT NULL,
  `price1` varchar(255) NOT NULL,
  `price2` varchar(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=243 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('2', '花王 Merries', '234', '676', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('3', '花王', '234', '123', '../img/pic/li_3.jpg');
INSERT INTO `goodslist` VALUES ('4', '撒打算', '454', '764', '../img/pic/li_6.jpg');
INSERT INTO `goodslist` VALUES ('5', '撒打算', '454', '764', '../img/pic/li_6.jpg');
INSERT INTO `goodslist` VALUES ('6', '花王 Merries', '47', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('7', '花王 Merries', '35', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('8', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('9', '花王 Merries', '88', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('10', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('11', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('12', '花王 Merries', '99', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('13', '花王 Merries', '234', '676', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('14', '花王', '234', '123', '../img/pic/li_3.jpg');
INSERT INTO `goodslist` VALUES ('15', '撒打算', '454', '764', '../img/pic/li_6.jpg');
INSERT INTO `goodslist` VALUES ('16', '撒打算', '454', '764', '../img/pic/li_6.jpg');
INSERT INTO `goodslist` VALUES ('17', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('18', '花王 Merries', '89', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('19', '花王 Merries', '147', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('20', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('21', '花王 Merries', '190', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('22', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('23', '花王 Merries', '225', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('24', '花王 Merries', '234', '676', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('25', '花王', '234', '123', '../img/pic/li_3.jpg');
INSERT INTO `goodslist` VALUES ('26', '撒打算', '454', '764', '../img/pic/li_6.jpg');
INSERT INTO `goodslist` VALUES ('27', '撒打算', '454', '764', '../img/pic/li_6.jpg');
INSERT INTO `goodslist` VALUES ('28', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('29', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('30', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('31', '花王 Merries', '234', '676', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('32', '花王', '234', '123', '../img/pic/li_3.jpg');
INSERT INTO `goodslist` VALUES ('33', '撒打算', '454', '764', '../img/pic/li_6.jpg');
INSERT INTO `goodslist` VALUES ('34', '撒打算', '454', '764', '../img/pic/li_6.jpg');
INSERT INTO `goodslist` VALUES ('35', '花王 Merries', '678', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('36', '花王 Merries', '32', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('37', '花王 Merries', '67', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('38', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('39', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('40', '花王 Merries', '99', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('41', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('42', '花王 Merries', '234', '676', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('43', '花王', '234', '123', '../img/pic/li_3.jpg');
INSERT INTO `goodslist` VALUES ('44', '撒打算', '454', '764', '../img/pic/li_6.jpg');
INSERT INTO `goodslist` VALUES ('45', '撒打算', '454', '764', '../img/pic/li_6.jpg');
INSERT INTO `goodslist` VALUES ('46', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('47', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('48', '花王 Merries', '90', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('49', '花王 Merries5', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('50', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('51', '花王 Merries', '189', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('52', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('53', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('54', '花王 Merries', '356', '234', '../img/pic/li_1.jpg');
INSERT INTO `goodslist` VALUES ('55', '花王 Merries', '123', '234', '../img/pic/li_1.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('18720970150', ' 123');
INSERT INTO `user` VALUES ('13826420418', '456');
INSERT INTO `user` VALUES ('18720970167', '789');
INSERT INTO `user` VALUES ('13555555555', '21218cca77804d2ba1922c33e0151105');
INSERT INTO `user` VALUES ('1345667', '51b355a3b14ea894bad041df42f57acf');
INSERT INTO `user` VALUES ('qwewq', '530b41b9592713481663f41dcacb03d5');
INSERT INTO `user` VALUES ('888888', 'ef775988943825d2871e1cfa75473ec0');
INSERT INTO `user` VALUES ('324324324234324234', 'ef775988943825d2871e1cfa75473ec0');
INSERT INTO `user` VALUES ('456456', 'd1c07866d71dc3a09b3b692d0a2086b4');
INSERT INTO `user` VALUES ('213213213213', '2e126a78a5b8dc677c4226f432274ea4');
INSERT INTO `user` VALUES ('213213213213', '2e126a78a5b8dc677c4226f432274ea4');
INSERT INTO `user` VALUES ('999', 'b706835de79a2b4e80506f582af3676a');
INSERT INTO `user` VALUES ('666', 'fae0b27c451c728867a567e8c1bb4e53');
INSERT INTO `user` VALUES ('ewrewr', '9ec2a1674b0cdcd5fd0918772a026a57');
INSERT INTO `user` VALUES ('111', '698d51a19d8a121ce581499d7b701668');
INSERT INTO `user` VALUES ('777', 'f1c1592588411002af340cbaedd6fc33');
INSERT INTO `user` VALUES ('888', '0a113ef6b61820daa5611c870ed8d5ee');
INSERT INTO `user` VALUES ('w', '006d2143154327a64d86a264aea225f3');
INSERT INTO `user` VALUES ('4234324', '15de21c670ae7c3f6f3f1f37029303c9');
SET FOREIGN_KEY_CHECKS=1;
