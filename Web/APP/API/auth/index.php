<?php
session_start();
$userName=$_REQUEST['userName'];
$pass=$_REQUEST['pass'];

if ($userName=="admin" && $pass=="nimda") header("Location:../../admin/dashboard"); 

include "../config.php";
$sql = "SELECT * FROM `user` WHERE `email` = '$userName' AND `pass` = '$pass';";
$result = $conn->query($sql);

echo $sql;
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $id= $row["id"];
        $name= $row["fname"];
        $_SESSION["name"] =$name;
        $_SESSION["userId"] =$id;

        setcookie("userID", $id, time() + (86400 * 2), "/");
        setcookie("user", $name, time() + (86400 * 2), "/");

       
        header("Location:../../"); 
        exit;
    }
} else {
//      header("Location:../lecturer/lecturerLoginError.html"); 
// exit    ;
}
$conn->close()

?>