

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <style>
      img {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
        width: 100px;
      }
  </style>
</head>
<body>

<div class="container">
   <table class="table table-striped">
   <?php include "API/getPendingOrders.php";?>
  </table>
  <form method="post" action="API/confirmOrder.php">   
    <input type="text" class="form-control"  name="address"  placeholder="Address">    <!-- Replace your Merchant ID -->
    <input type="hidden" class="form-control"  name="id"  value="<?php echo $_REQUEST['id'] ?>" placeholder="Address"> 
    <input type="submit" class="btn btn-success btn-lg"  style="margin-left: 90px;" value= "PAY LKR <?php  echo number_format($tot,2) ?>">   
</form> 
</div>

</body>
</html>
