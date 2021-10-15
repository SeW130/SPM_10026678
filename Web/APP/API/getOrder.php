<?php
$oID=$_REQUEST["id"];
include_once "config.php";
$sql = "SELECT `order_item`.`id`,`order_item`.`trollyId`,`order_item`.`item`,`order_item`.`qty`,`order_item`.`price`,`item`.`name`,`item`.`serialNo`,`item`.`id` AS `itemId`FROM `order_item`,`item` WHERE `order_item`.`item`=`item`.`id`  AND `order_item`.`trollyId`='COMPLEATED' AND `order_item`.`trollyId`=$oID";
//echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    echo "
    <thead>
    <tr class='w3-light-grey'>
            <th>Item</th>
            <th>Size</th>
            <th>QTY</th>
    </tr>
  </thead>";
    while($row = $result->fetch_assoc()) {
        $item= $row["name"];
        $qty= $row["qty"];
        $itemId= $row["itemId"];
        $serialNo= $row["serialNo"];
        
        

        echo "
      <tr>
      <td><img src='images/Products/$itemId.jpg'> </td>
        <td>$item <br/> Serial No : $serialNo</td>
      
        <td>$qty</td>
        
      </tr>
     
        ";
    }
} else {
}
$conn->close();




?>