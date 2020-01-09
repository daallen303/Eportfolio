<?php
ob_start();
require_once("Config.php");
require_once("User.class.php");


$user = new User();

$user->setUsername($_POST["username"]);
if ($user->login($_POST["password"]))  {
header("Location: Mainmenu.php");
ob_flush();
}else header("Location: Login.php");
ob_flush();
