<?php
$id=$_REQUEST["id"];
include_once "../../config.php";
$sql = "SELECT * FROM `items` WHERE `id`='$id'";
//echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $id= $row["id"];
        $name= $row["name"];
        $price= $row["price"];
        $info= $row["info"];  
        $careDetails= $row["careDetails"];
        $shipping_returns= $row["shipping_returns"];
     
              
        $myProfile=new \stdClass();
        $myProfile->success = true;
        $myProfile->id = $id;
        $myProfile->name = $name;
      
        $myProfile->price = $price; 
        $myProfile->info = $info;
        $myProfile->careDetails = $careDetails;
        $myProfile->shipping_returns = $shipping_returns;

        $myJSON = json_encode($myProfile);

echo $myJSON;
    }
} else {

   
    $myProfile=new \stdClass();
    $myProfile->success = false;
  
    $myJSON = json_encode($myProfile);

echo $myJSON;
}
$conn->close();




?>