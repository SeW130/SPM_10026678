<?php
include 'config.php';
// if($conn === false){
//     die("ERROR: Could not connect. " . mysqli_connect_error());
// }
    $id= $_REQUEST['id'];
   
$sql = 
"UPDATE `itemorder` SET `pamentStatus` = 'CANCELED_BY_ADMIN' ,`deliveryStatus` = 'CANCELED_BY_ADMIN' WHERE `itemorder`.`orderId` =  $id;
";

echo $sql;
if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";	
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
echo $sql;

$sql = "SELECT * FROM `checkout` WHERE `orderId` = $id";
echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $item= $row["item"];
        $size= $row["size"];
        $qty= $row["qty"];

         
        if ($size==6)$sql = "  UPDATE `items` SET `xs` = `xs`+$qty WHERE `items`.`id` = $item;";
        if ($size==8)$sql = "  UPDATE `items` SET `s` = `s`+$qty  WHERE `items`.`id` = $item;";
        if ($size==10)$sql = "  UPDATE `items` SET `m` = `m`+$qty  WHERE `items`.`id` = $item;";
        if ($size==12)$sql = "  UPDATE `items` SET `l` = `l`+$qty  WHERE `items`.`id` = $item;";
        if ($size==14)$sql = "  UPDATE `items` SET `xl` = `xl`+$qty  WHERE `items`.`id` = $item;";
        if ($size==16)$sql = "  UPDATE `items` SET `xxl` = `xxl`+$qty  WHERE `items`.`id` = $item;";

echo $sql;
if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";	
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
echo $sql;


      
    }
} else {
}


mysqli_close($conn);
header("Location:../order_1"); 
exit;





?>
