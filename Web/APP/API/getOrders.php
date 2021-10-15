<?php

include "config.php";
$sql = "SELECT * FROM `order` ORDER BY `order`.`timeStamp` desc ";
//echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    echo "
    <thead>
    <tr class='w3-light-grey'>
    <th> </th>
            <th>Order ID</th>
           
            
            <th>Date Time </th>
         
            <th>Payment Status</th>
            
            <th>Price</th>
            <th></th>
      
    </tr>
  </thead>";
    while($row = $result->fetch_assoc()) {
        $id= $row["id"];
        $user= $row["user"];
        $address= $row["address"];
        $contactNo= $row["contactNo"];
        $name= $row["contactNo"];
       
        $paymentStatus= $row["paymentStatus"];
        
        $total= $row["total"];
        $orderId= $row["trollyId"];
       
        $date= $row["timeStamp"];
        // date_default_timezone_set('Europe/London');
        $datetime = new DateTime($date);
        // echo $datetime->format('Y-m-d H:i:s') . "\n";
        $la_time = new DateTimeZone('Asia/Colombo');
        $datetime->setTimezone($la_time);
        
        

       
        echo "
        <tr>
        <td>$id</td>
          <td>$orderId</td>
       
          
          <td>$date</td>
          <td>$paymentStatus</td>
          
          <td>$total</td>
          <td><a href='order.php?id=$orderId'>View</a></td>
  
  
          
        </tr>
       
          ";
    }
} else {
}
$conn->close();




?>