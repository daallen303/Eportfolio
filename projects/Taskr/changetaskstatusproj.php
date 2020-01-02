<?php
require_once("Config.php");
require_once("task.class.php");

$task = new Task();
echo($_POST["status"]);
if(!empty($_POST))$task->setStatus($_POST["id"], $_POST["status"]);
header("Location: projects.php");
