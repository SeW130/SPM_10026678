<?php
include '../config.php';
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
    $email= $_POST['email'];
 	$pass= $_POST['pass'];
    $dob= $_POST['dob'];
    $race= $_POST['race'];
    $name= $_POST['name'];
    $tp= $_POST['tp'];
    $address= $_POST['address'];
    $hip= convertMmasurement($_POST['hip'],$_POST['hipMeasurement']) ;
    $height= convertMmasurement($_POST['height'],$_POST['heightMeasurement']) ;
    $chest=convertMmasurement($_POST['chest'],$_POST['chestMeasurement']) ;
    

    $randomVal=rand();

$sql = 
"INSERT INTO `users`(`id`, `email`, `pass`, `dob`, `race`, `name`, `tp`, `address`, `hip`, `height`, `chest`, `temp`, `conf`) 
            VALUES ('','$email','$pass','$dob','$race','$name','$tp','$address','$hip','$height','$chest','$randomVal','0')
";
if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";	
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
mysqli_close($conn);
//header("Location:../admin/student.html"); 
//exit;


function convertMmasurement($val,$measurement) {
    if ($measurement=='cm') return $val;
    elseif ($measurement=='inch') return $val*2.5;
    else if ($measurement=='ft') return $val*30;
    else return 0;
}


?>
