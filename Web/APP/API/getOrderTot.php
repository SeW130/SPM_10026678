
<?php

$id=$_REQUEST["id"];
include_once "config.php";
$sql = "SELECT * FROM `order`WHERE `id`=$id";
//echo $sql;
$tot=0;
$result = $conn->query($sql);

if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        $tot= $row["total"];
        
    }
} else {
}
$conn->close();



?>