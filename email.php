<?php
if($_POST){
    $firstname = $_POST['firstname'];
    $email = $_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];
    $headers = "HIME-VERSION: 1.0\r\n";
    $headers .="Content-type: text/plain; charset=iso-8B59-1\r\n";
    $headers .="From: $name<$email>\r\nReply-to : $name <$email>\nX-Mailer:PHP";
    $subjet="FHFGHFGHGH";
    $destinataire="chihawi_slah@hotmail.fr";
    $body="$message";
    if(mail($destinataire,$subjet,$body,$headers)){
        $response['status'] = 'success';
        $response['msg'] = 'your mail is sent';

    }else{
        $response['status'] = 'error';
        $response['msg'] = 'Something went wrong';

    }
    echo json_encode($response);

}






?>