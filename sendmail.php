<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language');
$mail->IsHTML(true);

// От кого письмо//
$mail->setForm('murmur@mail.ru', 'имя или текст')
// Кому отправляем//
$mail->addAddress('murmur@mail.ru');
// Тема письма//
$mail->Subject = 'Какой-то текст';

// Тело письма//
$body = '<h1>Запись на процедуры</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['petsName']))){
    $body.='<p><strong>Имя питомца:</strong> '.$_POST['petsName'].'</p>';
}
if(trim(!empty($_POST['phone']))){
    $body.='<p><strong>Имя питомца:</strong> '.$_POST['phone'].'</p>';
}

$mail->Body = $body;

// Отправка//
if(!$mail->send()){
    $massage = 'Ошибка';
} else{
    $massage = 'Письмо отправлено!';
}

$response = ['message' => $message];

header('Content-type:application/json');
echo json_encode($response);
?>

