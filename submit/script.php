<?php
ini_set('display_errors', 1);
ini_set("error_reporting", E_ALL);


$body = json_decode(file_get_contents("php://input"));


// echo $body['name'];
// echo $body['company'];
// echo $body['email'];
// echo $body['msg'];
echo $body->name;
echo $body->company;
echo $body->email;
echo $body->msg;


// $name = $body['name'];
// $company = $body['company'];
// $email = $body['email'];
// $msg = $body['msg'];

$name = $body->name;
$company = $body->company;
$email = $body->email;
$msg = $body->msg;


// the message
$subject = $name." ".$email." ".$company;
$subject = '=?UTF-8?B?'.base64_encode($subject).'?=';
// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);   


// send email
mail("kontakt@nikals.se", utf8_encode($subject), $msg);

?>