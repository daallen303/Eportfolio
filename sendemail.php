<?php



require_once 'PHPMailer/PHPMailerAutoload.php';

if(isset($_POST['submit']))
{
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
 
 $msg = 'Name: '.$name."\n".'Email: '.$email."\n".'Message: '.$message;


$mail =  new PHPMailer();
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->Host = 'smtp.gmail.com';
$mail->Port = '465';
$mail->isHTML();
$mail->Username = 'eportfoliodanielmailer@gmail.com';
$mail->Password='BlackPen1!';
$mail->SetFrom('eportfoliodanielmailer@gmail.com');
$mail->Subject = 'New Eportfolio message';
$mail->Body = $msg;
$mail->AddAddress('daallen303@gmail.com');

$mail->send();

}
else
{
	header(' location: contact.html');
}
?>
