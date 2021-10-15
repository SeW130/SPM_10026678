<?php
$id=$_REQUEST["id"];
include_once "config.php";
$sql = "SELECT * FROM `items` WHERE `id`='$id'";
//echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $id= $row["id"];
        $name= $row["name"];
        $price= $row["price"];
        $cat= $row["cat"];
        $info= $row["info"];  
     
        $fabricCost= $row["fabricCost"];
        $swingCost= $row["swingCost"];
        $factryCost= $row["factryCost"];
        $profitPresentage= $row["profit"];
        
        $xxs= $row["xxs"];
        $xs= $row["xs"];
        $s= $row["s"];
        $m= $row["m"];
        $l= $row["l"];
        $xl= $row["xl"];
        $xxl= $row["xxl"];
        

        $finalCost=$fabricCost+$swingCost+$factryCost;
        $profit=$finalCost/100*$profitPresentage;
        $profit=round($profit,2);
        $garmentPrice=$finalCost+$profit;
        $paymentGateway=39+($garmentPrice/100*3.9);
        $paymentGateway=round($paymentGateway,2);
        $garmentFinalPrice=$paymentGateway+$garmentPrice;
        $garmentFinalSellingPrice=(round($garmentFinalPrice, -1));
        
    }
} else {
}
$conn->close();




?>